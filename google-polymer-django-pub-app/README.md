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

3. Ingrese a [GitHub](https://github.com) Registre un usuario e ingrese a: [github.com/ManuelMena/polymer-pub-app](https://github.com/ManuelMena/polymer-pub-app) Clone o descarge este repositorio en su PC.

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
nombre: polymer-pub-app
$ polymer serve
```
##### cerrar SSH.

---
```
$ cd && cd htdocs/src/polymer-pub-app && mkdir body-paper && sudo chmod 777 body-paper && body-paper && polymer init
$ sudo chmod 777 body-paper.html

$ cd && cd htdocs/src/polymer-pub-app && mkdir introduction-section && sudo chmod 777 introduction-section && introduction-section && polymer init
$ sudo chmod 777 introduction-section.html

$ cd && cd htdocs/src/polymer-pub-app && mkdir abstract-counter-skip && sudo chmod 777 abstract-counter-skip && cd abstract-counter-skip && polymer init
$ sudo chmod 777 abstract-counter-skip.html

$ cd && cd htdocs/src/polymer-pub-app && mkdir div-copyright && sudo chmod 777 div-copyright && cd div-copyright && polymer init
$ sudo chmod 777 div-copyright.html

$ cd && cd htdocs/src/polymer-pub-app && mkdir header-counter-skip && sudo chmod 777 header-counter-skip && cd header-counter-skip && polymer init
$ sudo chmod 777 header-counter-skip.html

$ cd && cd htdocs/src/polymer-pub-app && mkdir math-menssage && sudo chmod 777 math-menssage && cd math-menssage && polymer init
$ sudo chmod 777 math-menssage.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir equation-simple && sudo chmod 777 equation-simple && cd equation-simple && polymer init
$ sudo chmod 777 equation-simple.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir equation-displaymath && sudo chmod 777 equation-displaymath && cd equation-displaymath && polymer init
$ sudo chmod 777 equation-displaymath.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir display-ecuations && sudo chmod 777 display-ecuations && cd display-ecuations && polymer init
$ sudo chmod 777 display-ecuations.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir citations-set && sudo chmod 777 citations-set && cd citations-set && polymer init
$ sudo chmod 777 citations-set.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir table-set && sudo chmod 777 table-set && cd table-set && polymer init
$ sudo chmod 777 table-set.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir figure-set && sudo chmod 777 figure-set && cd figure-set && polymer init
$ sudo chmod 777 figure-set.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir theorem-like-constructs && sudo chmod 777 theorem-like-constructs && cd theorem-like-constructs && polymer init
$ sudo chmod 777 theorem-like-constructs.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir caveat-expert && sudo chmod 777 caveat-expert && cd caveat-expert && polymer init
$ sudo chmod 777 caveat-expert.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir conclusion-set && sudo chmod 777 conclusion-set && cd conclusion-set && polymer init
$ sudo chmod 777 conclusion-set.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir acknowledgements-section && sudo chmod 777 acknowledgements-section && cd acknowledgements-section && polymer init
$ sudo chmod 777 acknowledgements-section.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir additional-authors && sudo chmod 777 additional-authors && cd additional-authors && polymer init
$ sudo chmod 777 additional-authors.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir references-set && sudo chmod 777 references-set && cd references-set && polymer init
$ sudo chmod 777 references-set.html

$ cd && cd htdocs/src/polymer-pub-app/body-paper && mkdir appendix-set && sudo chmod 777 appendix-set && cd appendix-set && polymer init
$ sudo chmod 777 appendix-set.html
```


