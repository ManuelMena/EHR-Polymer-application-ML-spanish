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
$ cd htdocs && sudo chmod 777 bower.json && sudo chmod 777 manifest.json && sudo chmod 777 polymer.json
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
## License & Copyright
© Manuel Mena. Tetraktys | Decisiones Acertadas.
