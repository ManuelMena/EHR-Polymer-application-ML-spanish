------------
# [Crear un servidor de Snomed-CT® con Google Cloud y Tomcat®](https://github.com/ManuelMena/Panacea/tree/master/TomcatMavenSNOMED-CT)
------------
## Crear instancia de VM con Tomcat®
https://console.cloud.google.com/launcher/details/click-to-deploy-images/tomcat
## Instalar requerimientos en el SSH
### Instalar maven
```debian
$ sudo apt-get install maven
```
### Instalar Servidor de MySQL 5.6
```linux
$ sudo apt-get install mysql-server
$ sudo su 
$ echo "CREATE database snomeddb CHARACTER SET utf8 default collate utf8_bin;" | mysql
```
# SETUP snomed
```linux
$ mkdir ~/snomed
```
## Crear directorio data
```linux
$ mkdir ~/snomed
$ cd ~/snomed
$ mkdir config data
$ git clone https://github.com/WestCoastInformatics/UMLS-Terminology-Server.git code
```
## Crear directorio code
```linux
$ cd ~/snomed/code
$ git pull
$ mvn -Dconfig.artifactId=term-server-config-prod-snomedct clean install
```
## Descomprimir datos de muestra
```linux
$ cd ~/snomed/code
$ unzip ~/snomed/code/config/target/term*.zip -d ~/snomed/data
```
## Descomprimir configuración y scripts
```linux
$ cd ~/snomed
$ unzip ~/snomed/code/config/prod-snomedct/target/term*.zip -d config
$ ln -s config/bin
```
## Revisar QA despues de cargar
```linux
$ cd ~/snomed/code/admin/qa
$ mvn install -PDatabase -Drun.config.snomed=/home/ec2-tomcat/config/config.properties
```
### editar ```JAVA_OPTS``` 
```debian
$ cd $CATALINA_HOME/etc/tomcat8 && sudo nano tomcat8.conf
```
#### cambiar <Plugin java></Plugin>
```config
<Plugin java>
  JAVA_OPTS "-Drun.config.snomed=/home/ec2-tomcat/snomed/config/config.properties file"
</Plugin>
```
## Recargar Datos
### Desanudar e iniciar la página de mantenimiento
```linux
$ /bin/rm -rf /var/lib/tomcat8/work/Catalina/localhost/snomed-server-rest
$ /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest
$ /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest.war
$ /opt/maint/getMaintHtml.sh start snomed
```
## Desplegar Datos
```linux
$ cd ~/snomed/data
$ wget https://wci1.s3.amazonaws.com/TermServer/snomed.sql.gz
$ mysqls < ~/snomed/code/admin/mojo/src/main/resources/truncate_all.sql
$ gunzip -c snomed.sql.gz | mysqls &
$ wait
$ mysqls < ~/fixWindowsExportData.sql
$ /bin/rm ~/snomed/data/snomed.sql.gz
```
## Recomputar indexes
```linux
$ /bin/rm -rf /var/lib/tomcat8/indexes/snomedct/*
$ cd ~/snomed/code/admin/lucene
$ mvn install -PReindex  -Drun.config.umls=/home/ec2-tomcat/snomed/config/config.properties >&! mvn.log &
```
## Desplegar y remover pagina de mantenimiento
```linux
$ /bin/cp -f ~/snomed/code/rest/target/umls-server-rest*war /var/lib/collectd/webapps/snomed-server-rest.war
$ /opt/maint/getMaintHtml.sh stop snomed
```
### Recuerde eliminar snomed.sql cuando haya terminado (ocupa mucho espacio)
### INSTRUCCIONES DE REEMPLEO
```linux
$ cd ~/snomed/code
$ git pull
$ mvn -Drun.config.label=ts -Dconfig.artifactId=term-server-config-prod-snomedct clean install
```
```linux
$ /bin/rm -rf /var/lib/tomcat8/work/Catalina/localhost/snomed-server-rest
$ /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest
$ /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest.war
$ /bin/cp -f ~/snomed/code/rest/target/umls-server-rest*war /var/lib/tomcat8/webapps/snomed-server-rest.war
```
