# Crear una publicación académica web con Google Polymer

Hola, Este métedo, que hemos llamado *Pitágoras*, enseña a crear una publicación en formato académico para distribución web, con Google Cloud Platform en pocos minutos.
------
----------
1. *Pitágoras* utiliza lenguajes de marcado como [Markdown](https://es.wikipedia.org/wiki/Markdown) ```.md```, [LaTeX](https://es.wikipedia.org/wiki/LaTeX) ```.txt``` y [HTML](https://es.wikipedia.org/wiki/HTML) ```.html```; ingresa a cada vinculo y conoce mas de su estructura.

Markdown
---
```md
# Encabezado 1
## Encabezado 2
### Encabezado 3
*Enfasis*
```
# Encabezado 1
## Encabezado 2
### Encabezado 3
*Enfasis*

---------
LaTeX
---
```txt
\begin{align}
E &= mc^2                              \\
m &= \frac{m_0}{\sqrt{1-\frac{v^2}{c^2}}}
\end{align}
\end{document}
```
![LaTeX e=mc2](https://storage.googleapis.com/panaceaapp/emclatex.png)

---------
HTML
---
```md
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
<em>Enfasis</em>
```
# Encabezado 1
## Encabezado 2
### Encabezado 3
*Enfasis*

---

2. Los editores de texto para código son esenciales en este metodo y recomendamos usar [Sublime Text](https://www.sublimetext.com/).

![Sublime Text](https://storage.googleapis.com/panaceaapp/sublimepolymer.png)

---

3. Ingrese a [GitHub](https://github.com) Registre un usuario e ingreses a: [github.com/ManuelMena/polymer-pub-app](https://github.com/ManuelMena/polymer-pub-app) Clona o descarga este repositorio en tu PC.

![GitHub](https://storage.googleapis.com/panaceaapp/githubpub.png)

---

4. Ingrese a [Google Cloud Platform](https://cloud.google.com/), inicie una prueba gratis, despues ingrese a la consola de Google en [Bitnami](https://bitnami.com/) y lance una máquina virtual (MV) con el stack [DJango](https://bitnami.com/stack/django).

![Bitnami Google Launchpad](https://storage.googleapis.com/panaceaapp/bitnamigooglelaunchpad.png)

---

5. Ingrese al SSH de su MV y ejecute las siguientes instrucciones para instalar Polymer.

![Bitnami SSH](https://storage.googleapis.com/panaceaapp/bitnamissh.png)

## Intalar nodejs
```linux
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
### Compilar e instalar extensiones nativas
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

---
