# \<panacea\>

## 1. Descripción

PANACEA es una aplicación de Polymer para la normalización y el análisis de los archivos del entorno clínico. Comienza con un módulo de historia clínica para consulta externa en formato SOAP (Subjetivo, Objetivo, Análisis y Plan). Tienes la función de crear registros de salud estructurados en una base de datos en tiempo real con Firebase.

En  este proyecto vamos a iniciar con el desarrollo de una aplicación progresiva con Polymer y Firebase. En la primera fase, vamos a crear en el inicio un formulario de login; el registro de los usuarios inicia con un acuerdo de confidencialidad y políticas de uso de la información.

Para iniciar el primer sprint con este marco de trabajo, vamos a crear un grupo inicial de médicos, con los que se construirá el backlog del mínimo producto viable… entonces vamos a iniciar con PolymerFire y la ventana de login! 

### Ambiente de trabajo

Antes de comenzar debes configurar un ambiente adecuado de trabajo:
- Instalar como editor de texto [Visual Studio Code](https://code.visualstudio.com/)
- Instalar [NodeJS](https://nodejs.org)
- Instalar [GIT](https://git-scm.com/)
- Crear una cuenta con [Google](https://accounts.google.com/SignUp)
- Iniciar un proyecto con [Firebase](https://console.firebase.google.com/u/0/)

## 2. Dependencias globales

Bower: se instala con el paquete de manejo de NodeJS(npm) y se usara para instalar las demas dependencias.

```linux & windows
$ npm install -g bower
```

Firebase: La interfaz de línea de comando(CLI) de Firebase tambien se instala con NodeJS 

```linux & windows
$ npm install -g firebase-tools
```
Verifique la instalación 

```linux & windows
$ firebase version
```
## Inicializar Firebase

* Antes de iniciar debes tener un proyecto nuevo en la [consola de Firebase](https://console.firebase.google.com/u/0/)

* Si es la primera vez que usas **Firebase CLI** inicia con ```firebase login```

Crea un nuevo directiorio para el proyecto y ejecuta este comando.

```
$ firebase init
```
Configura un proyecto con todas las caracteristicas predeterminadas de Firebase.

![proyecto](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/img/4df91a8c0dccb5df.png)
![predeterminado](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/img/de96d09e825c34a7.png)
![public](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/img/de96d09e825c34a7.png)
![index](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/img/1b05f1e094502330.png)




Instalaciones con Bower

```node
$ bower install polymerfire
$ bower install PolymerElements/platinum-sw --save
$ bower install web-animations-js
```