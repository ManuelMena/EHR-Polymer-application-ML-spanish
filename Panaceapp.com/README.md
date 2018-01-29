# Instalación de la app con Polymer en una instancia de Google Cloud 

## crear una instancia de Linux en Google Cloud

instrucciones: https://cloud.google.com/compute/docs/quickstart-linux

ingresar a la terminal y abrir un SSH

## instalar global de npm 

| mkdir ~/.npm-global |
| npm config set prefix '~/.npm-global' |
| sudo nano ~/.profile| 

-- pegar: | export PATH=~/.npm-global/bin:$PATH |

--guardar y volver a actualizar con el comando:

| source ~/.profile |

-- probar:

| npm install -g jshint |

## instalar y comprobar requisitos

| node --version |
| npm install npm@latest -g |
| git --version |
npm install -g bower

## instalar polymer CLI

| npm install -g polymer-cli |

## actualizar permisos

| sudo chmod 777 htdocs |
| cd htdocs |
| sudo chmod 777 index.html |

## intalar proyecto

| polymer init |
| polymer serve |

## construir

| cd htdocs |
| polymer build |

## instalar layout e instalar componentes.

| bower install PolymerElements/app-layout --save |

| bower install PolymerElements/paper-icon-button --save |

| bower install PolymerElements/iron-icons --save |

| bower install PolymerElements/iron-form --save |

| bower install PolymerElements/paper-button --save |

| bower install PolymerElements/paper-styles --save |

| bower install PolymerElements/iron-flex-layout --save |

| bower install PolymerElements/iron-pages --save |

| bower install PolymerElements/iron-selector --save |

| bower install PolymerElements/iron-selector --save |

| bower install PolymerElements/paper-listbox --save |

| bower install PolymerElements/paper-styles --save |

| bower install PolymerElements/iron-meta --save |

| bower install PolymerElements/iron-ajax --save |

| bower install PolymerElements/app-route --save |

## *** necesitan usuario de github

| bower install PolymerElements/iron-page-scroll --save |
| bower install PolymerElements/iron-demo-helpers --save |

--- permisos para transferir archivos

## actualizar permisos

| cd htdocs |
| sudo chmod 777 bower.json |
| sudo chmod 777 manifest.json |
| sudo chmod 777 polymer.json |

## crear elementos

| mkdir sub-dash && cd sub-dash |
| polymer init |
| mkdir obj-dash && cd obj-dash |
| polymer init |
| mkdir ana-dash && cd ana-dash |
| polymer init |

## permisos de los ficheros de los elementos

| cd sub-dash |
| sudo chmod 777 sub-dash.html |
| cd obj-dash |
| sudo chmod 777 obj-dash.html |
| cd ana-dash |
| sudo chmod 777 ana-dash.html |

