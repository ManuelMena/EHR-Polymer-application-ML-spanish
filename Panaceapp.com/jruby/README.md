# Crear una MV Debian con Google Cloud en Bitnami usando es stack Jruby
https://bitnami.com/stack/jruby
# Abrir una terminal SSH
## Instalar requerimientos
### Tomcat Setup JAVA_OPTS
```debian
shell> cd $CATALINA_HOME/etc
shell> sudo nano collectd.conf
```
cambiar <Plugin java></Plugin>
```nano
<Plugin java>
      JVMArg "-verbose:jni"
      JVMArg "-Djava.class.path=/opt/stackdriver/collectd/share/collectd/java/collectd-api.jar"
      JAVA_OPTS "-Drun.config.snomed=/home/mfm5458/snomed/code/config/prod-snomedct/src/main/resources/config.properties"
      LoadPlugin "org.collectd.java.Foobar"
#       <Plugin "org.collectd.java.Foobar">
#         # To be parsed by the plugin
#       </Plugin>
</Plugin>
```
### Instalar maven
```debian
shell> sudo apt-get install maven
```
### Instalar Servidor de MySQL 5.6
#### Obtener Contraseña de Bitnami-VM
```linux
shell> sudo apt-get install mysql-server
shell> echo "CREATE database snomeddb CHARACTER SET utf8 default collate utf8_bin;" | mysql -u root -p
```
# SETUP
## data
```linux
shell> mkdir ~/snomed
shell> cd ~/snomed
shell> mkdir config data
shell> git clone https://github.com/WestCoastInformatics/UMLS-Terminology-Server.git code
```
## code
```linux
shell> cd ~/snomed/code
shell> git pull
shell> mvn -Dconfig.artifactId=term-server-config-prod-snomedct clean install
```
## unpack sample data
```linux
shell> cd ~/snomed/code
shell> unzip ~/snomed/code/config/target/term*.zip -d ~/snomed/data
```
## unpack config and scripts
```linux
shell> cd ~/snomed
shell> unzip ~/snomed/code/config/prod-snomedct/target/term*.zip -d config
shell> ln -s config/bin
```
## Check QA after the load
```linux
shell> cd ~/snomed/code/admin/qa
shell> mvn install -PDatabase -Drun.config.snomed=/home/ec2-tomcat/config/config.properties
```

## RELOADING DATA
```linux
* Undeploy and start maintenance page
shell> /bin/rm -rf /var/lib/collectd/work/Catalina/localhost/snomed-server-rest
shell> /bin/rm -rf /var/lib/collectd/webapps/snomed-server-rest
shell> /bin/rm -rf /var/lib/collectd/webapps/snomed-server-rest.war
shell> /opt/maint/getMaintHtml.sh start snomed
```
## deploy data
```linux
shell> cd ~/snomed/data
shell> wget https://wci1.s3.amazonaws.com/TermServer/snomed.sql.gz
shell> mysqls < ~/snomed/code/admin/mojo/src/main/resources/truncate_all.sql
shell> gunzip -c snomed.sql.gz | mysqls &
shell> wait
shell> mysqls < ~/fixWindowsExportData.sql
shell> /bin/rm ~/snomed/data/snomed.sql.gz
```
## recompute indexes (make sure latest code is built)
```linux
shell> /bin/rm -rf /var/lib/collectd/indexes/snomedct/*
shell> cd ~/snomed/code/admin/lucene
shell> mvn install -PReindex  -Drun.config.umls=/home/ec2-tomcat/snomed/config/config.properties >&! mvn.log &
```
## Deploy and remove maintenance page
```linux
shell> /bin/cp -f ~/snomed/code/rest/target/umls-server-rest*war /var/lib/collectd/webapps/snomed-server-rest.war
shell> /opt/maint/getMaintHtml.sh stop snomed
```
### Remember to remove snomed.sql when finished (it takes a lot of space)
### REDEPLOY INSTRUCTIONS
```linux
shell> cd ~/snomed/code
shell> git pull
shell> mvn -Drun.config.label=ts -Dconfig.artifactId=term-server-config-prod-snomedct clean install
```
```linux
shell> /bin/rm -rf /var/lib/tomcat8/work/Catalina/localhost/snomed-server-rest
shell> /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest
shell> /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest.war
shell> /bin/cp -f ~/snomed/code/rest/target/umls-server-rest*war /var/lib/tomcat8/webapps/snomed-server-rest.war
```
## Restaurar Apache2 con bitnami
```debian
shell> sudo /opt/bitnami/ctlscript.sh restart apache
```