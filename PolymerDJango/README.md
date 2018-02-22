
## !!! [Landing Page: www.panaceapp.site](http://panaceapp.site/)
------------
# [Instalar Polymer con Django en Google Cloud](https://github.com/ManuelMena/Panacea/tree/master/DJangoPolymer)
------------
## Crear una instancia de Linux con el stack django en bitnami con Google Cloud
https://bitnami.com/stack/django
ingresar a la terminal y abrir un SSH
## Intalar nodejs
```linux
shell> curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
shell> sudo apt-get install -y nodejs
```
### Para compilar e instalar extensiones nativas
```linux 
shell> sudo apt-get install -y build-essential
```
## Instalar global de npm 
```linnux
shell> mkdir ~/.npm-global
shell> npm config set prefix '~/.npm-global'
shell> sudo nano ~/.profile
```
### Pegar
```linux
shell> export PATH=~/.npm-global/bin:$PATH
```
### Guardar y volver a actualizar con el comando
```linux
shell> source ~/.profile
```
### probar
```linux
shell> npm install -g jshint
```
## Instalar y comprobar requisitos
```linux
shell> node --version
shell> npm install npm@latest -g
shell> git --version
shell> npm install -g bower
```
## Instalar polymer CLI
```linux
shell> npm install -g polymer-cli
```
## Actualizar permisos
```linux
shell> sudo chmod 777 htdocs
shell> cd htdocs && sudo chmod 777 index.html
```
## Instalar proyecto
```linux
shell> cd && cd htdocs && polymer init
shell> ❯ polymer-2-application - A simple Polymer 2.0 application
shell> polymer serve
```
##### cerrar SSH.
## Actualizar permisos
```
shell> cd htdocs sudo chmod 777 bower.json && sudo chmod 777 manifest.json && sudo chmod 777 polymer.json
```
## Instalar layout y componentes en htdocs.
```linux
shell> cd && cd htdocs
shell> bower install PolymerElements/app-layout --save && bower install PolymerElements/iron-icons --save && bower install PolymerElements/paper-icon-button --save
shell> bower install PolymerElements/iron-pages --save && bower install PolymerElements/paper-button --save && bower install PolymerElements/paper-styles --save
shell> bower install PolymerElements/iron-selector --save && bower install PolymerElements/paper-listbox --save && bower install PolymerElements/iron-flex-layout --save
shell> bower install PolymerElements/iron-form --save && bower install PolymerElements/paper-styles --save && bower install PolymerElements/iron-ajax --save
shell> bower install PolymerElements/iron-meta --save && bower install PolymerElements/app-route --save 
shell> bower install PolymerElements/iron-demo-helpers --save 
shell> bower install PolymerElements/iron-page-scroll --save
```
## crear elementos
```linux
shell> cd && cd htdocs && mkdir sub-dash && cd sub-dash && polymer init
shell> cd && cd htdocs && mkdir obj-dash && cd obj-dash && polymer init
shell> cd && cd htdocs && mkdir ana-dash && cd ana-dash && polymer init
shell> cd && cd htdocs && mkdir medico-info && cd medico-info && polymer init
shell> cd && cd htdocs && mkdir config-panacea && cd config-panacea && polymer init
shell> cd && cd htdocs && mkdir paciente-info && cd paciente-info && polymer init
```
## permisos de los ficheros de los elementos
```linux
shell> cd && cd htdocs && cd sub-dash && sudo chmod 777 sub-dash.html
shell> cd && cd htdocs &&  cd obj-dash && sudo chmod 777 obj-dash.html
shell> cd && cd htdocs && cd ana-dash && sudo chmod 777 ana-dash.html
shell> cd && cd htdocs && cd medico-info && sudo chmod 777 medico-info.html
shell> cd && cd htdocs && cd config-panacea && sudo chmod 777 config-panacea.html
shell> cd && cd htdocs && cd paciente-info && sudo chmod 777 paciente-info.html
```
## construir
```linux
shell> cd && cd htdocs && polymer build 
```

## License & Copyright
© Manuel Mena. Tetraktys | Decisiones Acertadas.
