# Instrucciones crear una base de datos con Snomed-CT® en Google Cloud SQL
## Crear instancia de Cloud SQL con MySQL 5.6
https://console.cloud.google.com
## Crear Usuario en Cloud SQL y una base de datos [snomed]
https://cloud.google.com/sql/docs/mysql/create-manage-databases
## Instalar MySQL Workbench en el PC
https://dev.mysql.com/downloads/workbench/
## Conocer tu IP publica para autorizar red en Cloud SQL (en cada conexión)
```cdm
shell> ftp
shell> open ftp.opera.com
* usuario
shell> anonymous
shell> 
* enter
shell> literal stat
shell> close
shell> exit
```
## Crear Una conexión de Cloud SQL con MySQL Workbench
https://cloud.google.com/sql/docs/mysql/admin-tools

# Instalación
------------
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
mysql> set MYSQL_HOME=[Nombre de conexión con la instancia Cloud SQL]
mysql> set user=[Cuentas de usuario de MySQL]
mysql> set password=[Contraseña de usuario de MySQL]
mysql> set db_name=[snomed?]
```
  
6. Cambie las configuraciones en ```mysql_tables.sql``` del script para su entorno en ```LOAD DATA LOCAL INFILE```

7. Ingrese a Workbench y ejecute una conexión con Cloud SQL en su instancia e importe los script
