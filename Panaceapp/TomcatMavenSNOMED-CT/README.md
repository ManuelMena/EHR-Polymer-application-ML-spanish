# Instrucciones crear servidor de Snomed-CT® con Google Cloud y Tomcat®
## Crear instancia de VM con Tomcat®
https://console.cloud.google.com/launcher/details/click-to-deploy-images/tomcat
## Instalar requerimientos en el SSH
### Instalar maven
```debian
shell> sudo apt-get install maven
```
### Instalar Servidor de MySQL 5.6
```linux
shell> sudo apt-get install mysql-server
shell> sudo su 
shell> echo "CREATE database snomeddb CHARACTER SET utf8 default collate utf8_bin;" | mysql
E2sbSjd8
```
# SETUP snomed
```linux
shell> mkdir ~/snomed
```
## Crear directorio data
```linux
shell> mkdir ~/snomed
shell> cd ~/snomed
shell> mkdir config data
shell> git clone https://github.com/WestCoastInformatics/UMLS-Terminology-Server.git code
```
## Crear directorio code
```linux
shell> cd ~/snomed/code
shell> git pull
shell> mvn -Dconfig.artifactId=term-server-config-prod-snomedct clean install
```
## Descomprimir datos de muestra
```linux
shell> cd ~/snomed/code
shell> unzip ~/snomed/code/config/target/term*.zip -d ~/snomed/data
```
## Descomprimir configuración y scripts
```linux
shell> cd ~/snomed
shell> unzip ~/snomed/code/config/prod-snomedct/target/term*.zip -d config
shell> ln -s config/bin
```
## Revisar QA despues de cargar
```linux
shell> cd ~/snomed/code/admin/qa
shell> mvn install -PDatabase -Drun.config.snomed=/home/ec2-tomcat/config/config.properties
```
### editar ```JAVA_OPTS``` 
```debian
shell> cd $CATALINA_HOME/etc/tomcat8 && sudo nano tomcat8.conf
```
#### cambiar <Plugin java></Plugin>
```nano
<Plugin java>
  JAVA_OPTS "-Drun.config.snomed=/home/ec2-tomcat/snomed/config/config.properties file"
</Plugin>
```
## Recargar Datos
### Desanudar e iniciar la página de mantenimiento
```linux
shell> /bin/rm -rf /var/lib/tomcat8/work/Catalina/localhost/snomed-server-rest
shell> /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest
shell> /bin/rm -rf /var/lib/tomcat8/webapps/snomed-server-rest.war
shell> /opt/maint/getMaintHtml.sh start snomed
```
## Desplegar Datos
```linux
shell> cd ~/snomed/data
shell> wget https://wci1.s3.amazonaws.com/TermServer/snomed.sql.gz
shell> mysqls < ~/snomed/code/admin/mojo/src/main/resources/truncate_all.sql
shell> gunzip -c snomed.sql.gz | mysqls &
shell> wait
shell> mysqls < ~/fixWindowsExportData.sql
shell> /bin/rm ~/snomed/data/snomed.sql.gz
```
## Recomputar indexes
```linux
shell> /bin/rm -rf /var/lib/tomcat8/indexes/snomedct/*
shell> cd ~/snomed/code/admin/lucene
shell> mvn install -PReindex  -Drun.config.umls=/home/ec2-tomcat/snomed/config/config.properties >&! mvn.log &
```
## Desplegar y remover pagina de mantenimiento
```linux
shell> /bin/cp -f ~/snomed/code/rest/target/umls-server-rest*war /var/lib/tomcat8/webapps/snomed-server-rest.war
shell> /opt/maint/getMaintHtml.sh stop snomed
```
### Recuerde eliminar snomed.sql cuando haya terminado (ocupa mucho espacio)
### INSTRUCCIONES DE REEMPLEO
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
