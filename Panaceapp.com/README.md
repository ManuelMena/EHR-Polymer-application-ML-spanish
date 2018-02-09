# Instalación de la app con django y paquete de Polymer en una instancia de Google Cloud 

## Crear una instancia de Linux con el stack django en bitnami con Google Cloud

https://bitnami.com/stack/django

ingresar a la terminal y abrir un SSH

## Intalar nodejs

```linux
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Para compilar e instalar extensiones nativas

sudo apt-get install -y build-essential

## Instalar global de npm 

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

sudo nano ~/.profile

### Pegar

export PATH=~/.npm-global/bin:$PATH

### Guardar y volver a actualizar con el comando

source ~/.profile

### probar

npm install -g jshint

## Instalar y comprobar requisitos

node --version

npm install npm@latest -g

git --version

npm install -g bower

## Instalar polymer CLI

npm install -g polymer-cli

## Actualizar permisos

sudo chmod 777 htdocs

cd htdocs && sudo chmod 777 index.html

## Instalar proyecto

cd && cd htdocs && polymer init

❯ polymer-2-application - A simple Polymer 2.0 application

polymer serve

##### cerrar SSH.

## Actualizar permisos

cd htdocs sudo chmod 777 bower.json && sudo chmod 777 manifest.json && sudo chmod 777 polymer.json

## Instalar layout y componentes en htdocs.

cd && cd htdocs

bower install PolymerElements/app-layout --save && bower install PolymerElements/iron-icons --save && bower install PolymerElements/paper-icon-button --save

bower install PolymerElements/iron-pages --save && bower install PolymerElements/paper-button --save && bower install PolymerElements/paper-styles --save

bower install PolymerElements/iron-selector --save && bower install PolymerElements/paper-listbox --save && bower install PolymerElements/iron-flex-layout --save

bower install PolymerElements/iron-form --save && bower install PolymerElements/paper-styles --save && bower install PolymerElements/iron-ajax --save

bower install PolymerElements/iron-meta --save && bower install PolymerElements/app-route --save 

bower install PolymerElements/iron-demo-helpers --save 

bower install PolymerElements/iron-page-scroll --save

## crear elementos

cd && cd htdocs && mkdir sub-dash && cd sub-dash && polymer init

cd && cd htdocs && mkdir obj-dash && cd obj-dash && polymer init

cd && cd htdocs && mkdir ana-dash && cd ana-dash && polymer init

cd && cd htdocs && mkdir medico-info && cd medico-info && polymer init

cd && cd htdocs && mkdir config-panacea && cd config-panacea && polymer init

cd && cd htdocs && mkdir paciente-info && cd paciente-info && polymer init


## permisos de los ficheros de los elementos

cd && cd htdocs && cd sub-dash && sudo chmod 777 sub-dash.html

cd && cd htdocs &&  cd obj-dash && sudo chmod 777 obj-dash.html

cd && cd htdocs && cd ana-dash && sudo chmod 777 ana-dash.html

cd && cd htdocs && cd medico-info && sudo chmod 777 medico-info.html

cd && cd htdocs && cd config-panacea && sudo chmod 777 config-panacea.html

cd && cd htdocs && cd paciente-info && sudo chmod 777 paciente-info.html

## construir

cd && cd htdocs && polymer build 