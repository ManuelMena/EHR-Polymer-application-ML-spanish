# \<panacea\>

PANACEA es una aplicación de Polymer para la normalización y el análisis de los archivos del entorno clínico. Comienza con un módulo de historia clínica para consulta externa en formato SOAP (Subjetivo, Objetivo, Análisis y Plan). Tienes la función de crear registros de salud estructurados en una base de datos en tiempo real con Firebase.

## 1. Descripción

En  este proyecto vamos a iniciar con el desarrollo de una aplicación progresiva con Polymer y Firebase. En la primera fase, vamos a crear en el inicio un formulario de login; el registro de los usuarios inicia con un acuerdo de confidencialidad y políticas de uso de la información.

Para iniciar el primer sprint con este marco de trabajo, vamos a crear un grupo inicial de médicos, con los que se construirá el backlog del mínimo producto viable… entonces vamos a iniciar con PolymerFire y la ventana de login! 

### Ambiente de trabajo

Antes de comenzar debes configurar un ambiente de trabajo adecuado:
- Instalar como editor de texto [Visual Studio Code](https://code.visualstudio.com/)
- Instalar [NodeJS](https://nodejs.org)
- Instalar [GIT](https://git-scm.com/)
- Crear una cuenta con [Google](https://accounts.google.com/SignUp)
- Iniciar un proyecto con [Firebase](https://console.firebase.google.com/u/0/)

## 2. Dependencias globales

Bower: se instala con el paquete de manejo de NodeJS(npm) y se usará para instalar las demás dependencias.

```linux & windows
$ npm install -g bower
```

Firebase: La interfaz de línea de comando(CLI) de Firebase también se instala con NodeJS 

```linux & windows
$ npm install -g firebase-tools
```
Verifique la instalación 

```linux & windows
$ firebase version
```
## 3. Iniciar Firebase

* Antes de iniciar debes tener un proyecto nuevo en la [consola de Firebase](https://console.firebase.google.com/u/0/)

* Si es la primera vez que usas **Firebase CLI** inicia con ```firebase login```

Crea un nuevo directorio para el proyecto y ejecuta este comando:

```linux & windows
$ firebase init
```

Configura un proyecto con todas las características predeterminadas de Firebase.

![proyecto]()
![predeterminado]()
![public]()
![index]()

## 4. Instalar e iniciar un proyecto con Polymer

La interfaz de línea de comando(CLI) de Polymer también se instala con NodeJS

```linux & windows
$ npm install npm@latest -g
$ npm install -g polymer-cli
```

En la carpeta **/public**, inicia un proyecto y ejecuta este comando:

```linux & windows
$ polymer init
```
Elige una simple aplicación con Polymer y configura como nombre ```panacea```.

![2.0-app](https://storage.googleapis.com/panacea-app/polymer2app.png)

## 5. Inicia tu servidor de desarrollo

En la carpeta **/public**, ejecuta este comando:

```linux & windows
$ firebase serve
```
Con este comando debes ver este mensaje: ```Server listening at: http://localhost:5000```,ingresa y si todo esta bien debes ver la página de inicio de la aplicación con Polymer. 

![panacea-app](https://storage.googleapis.com/panacea-app/panacea-app.png)

## Configurar