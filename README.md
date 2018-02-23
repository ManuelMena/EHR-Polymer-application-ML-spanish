#### ```Instrucciones para crear los servidores de la aplicación en VMs de Google Cloud```
------------
### [Instalar Polymer con Django en Google Cloud](https://github.com/ManuelMena/Panacea/blob/master/README.md#instalar-polymer-con-django-en-google-cloud-1)
### [Crear una base de datos con Snomed-CT® en Google Cloud SQL](https://github.com/ManuelMena/Panacea/blob/master/README.md#crear-una-base-de-datos-con-snomed-ct-en-google-cloud-sql-1)
### [Crear un servidor de Snomed-CT® con Google Cloud y Tomcat®](https://github.com/ManuelMena/Panacea/blob/master/README.md#crear-un-servidor-de-snomed-ct-con-google-cloud-y-tomcat-1)
### [Instalar Google Compute EngineR con Rstudio](https://github.com/ManuelMena/Panacea/blob/master/README.md#instalar-google-compute-enginer-con-rstudio-1)
------------
# [Instalar Polymer con Django en Google Cloud](https://github.com/ManuelMena/Panacea/tree/master/DJangoPolymer)
------------
## Crear una instancia de Linux con el stack django en bitnami con Google Cloud
https://bitnami.com/stack/django
ingresar a la terminal y abrir un SSH
## Intalar nodejs
```linux
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
### Para compilar e instalar extensiones nativas
```linux 
$ sudo apt-get install -y build-essential
```
## Instalar global de npm 
```linnux
$ mkdir ~/.npm-global
$ npm config set prefix '~/.npm-global'
$ sudo nano ~/.profile
```
### Pegar
```linux
$ export PATH=~/.npm-global/bin:$PATH
```
### Guardar y volver a actualizar con el comando
```linux
$ source ~/.profile
```
### probar
```linux
$ npm install -g jshint
```
## Instalar y comprobar requisitos
```linux
$ node --version
$ npm install npm@latest -g
$ git --version
$ npm install -g bower
```
## Instalar polymer CLI
```linux
$ npm install -g polymer-cli
```
## Actualizar permisos
```linux
$ sudo chmod 777 htdocs
$ cd htdocs && sudo chmod 777 index.html
```
## Instalar proyecto
```linux
$ cd && cd htdocs && polymer init
$ ❯ polymer-2-application - A simple Polymer 2.0 application
$ polymer serve
```
##### cerrar SSH.
## Actualizar permisos
```
$ cd htdocs sudo chmod 777 bower.json && sudo chmod 777 manifest.json && sudo chmod 777 polymer.json
```
## Instalar layout y componentes en htdocs.
```linux
$ cd && cd htdocs
$ bower install PolymerElements/app-layout --save && bower install PolymerElements/iron-icons --save && bower install PolymerElements/paper-icon-button --save
$ bower install PolymerElements/iron-pages --save && bower install PolymerElements/paper-button --save && bower install PolymerElements/paper-styles --save
$ bower install PolymerElements/iron-selector --save && bower install PolymerElements/paper-listbox --save && bower install PolymerElements/iron-flex-layout --save
$ bower install PolymerElements/iron-form --save && bower install PolymerElements/paper-styles --save && bower install PolymerElements/iron-ajax --save
$ bower install PolymerElements/iron-meta --save && bower install PolymerElements/app-route --save 
$ bower install PolymerElements/iron-demo-helpers --save 
$ bower install PolymerElements/iron-page-scroll --save
```
## crear elementos
```linux
$ cd && cd htdocs && mkdir sub-dash && cd sub-dash && polymer init
$ cd && cd htdocs && mkdir obj-dash && cd obj-dash && polymer init
$ cd && cd htdocs && mkdir ana-dash && cd ana-dash && polymer init
$ cd && cd htdocs && mkdir medico-info && cd medico-info && polymer init
$ cd && cd htdocs && mkdir config-panacea && cd config-panacea && polymer init
$ cd && cd htdocs && mkdir paciente-info && cd paciente-info && polymer init
```
## permisos de los ficheros de los elementos
```linux
$ cd && cd htdocs && cd sub-dash && sudo chmod 777 sub-dash.html
$ cd && cd htdocs &&  cd obj-dash && sudo chmod 777 obj-dash.html
$ cd && cd htdocs && cd ana-dash && sudo chmod 777 ana-dash.html
$ cd && cd htdocs && cd medico-info && sudo chmod 777 medico-info.html
$ cd && cd htdocs && cd config-panacea && sudo chmod 777 config-panacea.html
$ cd && cd htdocs && cd paciente-info && sudo chmod 777 paciente-info.html
```
## construir
```linux
$ cd && cd htdocs && polymer build 
```

------------
# [Crear una base de datos con Snomed-CT® en Google Cloud SQL](https://github.com/ManuelMena/Panacea/tree/master/CloudMySQL)
------------
## Crear instancia de Cloud SQL con MySQL 5.6
https://console.cloud.google.com
## Crear Usuario en Cloud SQL y una base de datos [snomed]
https://cloud.google.com/sql/docs/mysql/create-manage-databases
## Instalar MySQL Workbench en el PC
https://dev.mysql.com/downloads/workbench/
## Conocer tu IP publica para autorizar red en Cloud SQL (en cada conexión)
```cdm
$ ftp
$ open ftp.opera.com
$ anonymous
$ literal stat
$ close
$ exit
```
## Crear Una conexión de Cloud SQL con MySQL Workbench
https://cloud.google.com/sql/docs/mysql/admin-tools

# Instalación

1. Descargue los archivos de liberación de SNOMED CT en formato ZIP. ! debe obtener una licencia de NLM

Pueden encontrar los archivos aquí:

* Archivos de versión de SNOMED CT® US Edition: 
https://www.nlm.nih.gov/healthit/snomedct/us_edition.html
* Archivos de versión de SNOMED CT® International Edition: 
https://www.nlm.nih.gov/healthit/snomedct/international.html

2. Descomprima los archivos en una carpeta de lanzamiento

3. Descarge y descomprima los scripts del instalador de www.westcoastinformatics.com

* SNOMED CT® MySQL Database Load Scripts http://www.westcoastinformatics.com/snomedtools/snomed-db-scripts-mysql.20170131.zip

4. Copie los scripts del instalador rf2/ (paso 3) en la carpeta de lanzamiento (paso 2)

```
mysql.log
mysql_indexes.sql
mysql_tables.sql
mysql_views.sql  
populate_mysql_db.bat
populate_oracle_db.sh
```

5. Edite el su entorno en el archivo de Windows "populate_mysql_db.bat" y en Linux / Unix / MacOS "populate_oracle_db.sh" 

```mysql
set MYSQL_HOME=[Nombre de conexión con la instancia Cloud SQL]
set user=[Cuentas de usuario de MySQL]
set password=[Contraseña de usuario de MySQL]
set db_name=[snomed?]
```
  
6. Cambie las configuraciones en ```mysql_tables.sql``` del script para su entorno en ```LOAD DATA LOCAL INFILE```

7. Ingrese a Workbench y ejecute una conexión con Cloud SQL en su instancia e importe los script

------------
# [Crear un servidor de Snomed-CT® con Google Cloud y Tomcat®](https://github.com/ManuelMena/Panacea/tree/master/TomcatMavenSNOMED-CT)
------------
## Crear instancia de VM con Tomcat®
https://console.cloud.google.com/launcher/details/click-to-deploy-images/tomcat
## Instalar requerimientos en el SSH
### Instalar maven
```debian
shell> sudo apt-get install maven
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

------------
# [Instalar Google Compute EngineR con Rstudio](https://github.com/ManuelMena/Panacea/tree/master/GoogleComputeEngineR)
------------
```
!!! Lista de Comandos con fallas. Por favor contribuir. 
```
## Instalar Liberias y opciones
```R
install.packages("googleComputeEngineR")
install.packages("googleAuthR")
options("googleAuthR.client_id" = "[.apps.googleusercontent.com]")
options("googleAuthR.client_secret" = "[https://developers.google.com/identity/protocols/OAuth2ServiceAccount]")
options("googleAuthR.scopes.selected" = "[https://cran.r-project.org/web/packages/googleAuthR/vignettes/google-authentication-types.html]")
options("googleAuthR.scopes" = "[https://cran.r-project.org/web/packages/googleAuthR/vignettes/google-authentication-types.html]")
library(googleComputeEngineR)
library(googleAuthR)
```
## Crear credenciales
```R
library(googlesheets)
library(httr)
gar_create_api_skeleton(filename, api_json, format = TRUE)
gar_create_package(api_json, directory, rstudio = TRUE, check = TRUE, github = TRUE, format = TRUE, overwrite = TRUE)
R> file.remove('.httr-oauth') 
R> oauth2.0_token(endpoint = oauth_endpoints("google"), app = oauth_app("google"), key = getOption("googlesheets.client_id"), 
   secret = getOption("googlesheets.client_secret")),
R> scope = c("https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"), use_oob = TRUE, cache = TRUE)
R> gs_ls() 

R> library(googlesheets) 
R> options(httr_oob_default=TRUE) 
R> gs_ls()
```
## Generar API
```R 
R> gar_api_generator()
R> gar_api_generator(baseURI, http_header = c("GET", "POST", "PUT", "DELETE", "PATCH"), path_args = NULL, pars_args = NULL, 
   data_parse_function = NULL, customConfig = NULL, simplifyVector = getOption("googleAuthR.jsonlite.simplifyVector"), checkTrailingSlash = TRUE)
```
## Setup
```R 
R> gar_api_generator()
R> gar_api_generator(baseURI, http_header = c("GET", "POST", "PUT", "DELETE", "PATCH"), path_args = NULL, pars_args = NULL, 
   data_parse_function = NULL, customConfig = NULL, simplifyVector = getOption("googleAuthR.jsonlite.simplifyVector"), checkTrailingSlash = TRUE)
R> project <- "[normbre del proyecto?]"
R> zone <- "[us-west1-b?]"
R> account_key <- "[.json?]"
R> Sys.setenv(GCE_AUTH_FILE = account_key, GCE_DEFAULT_PROJECT_ID = [project?], GCE_DEFAULT_ZONE = [zone?])
R> gce_auth()
```
## Establecer proyecto global predeterminado
```
gce_global_project([project?])
gce_global_zone([zone?])
default_project <- gce_get_project([normbre del proyecto?])
```
## License & Copyright
© Manuel Mena. Tetraktys | Decisiones Acertadas.
