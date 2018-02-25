# Crear una publicación académica web con Google Polymer

Hola

Este métedo que hemos llamado *Pitágoras* enseña a crear una publicación en formato académico para distribución web en Google Cloud Platform en pocos minutos.

Para utilizar *Pitágoras* debes primero ingresar a los links y conocer un poco de Markdown ```.md```, <p align="center"><img alt="\begin{tikzpicture}&#10;\newcounter{density}&#10;\setcounter{density}{20}&#10;    \def\couleur{blue}&#10;    \path[coordinate] (0,0)  coordinate(A)&#10;                ++( 60:6cm) coordinate(B)&#10;                ++(-60:6cm) coordinate(C);&#10;    \draw[fill=\couleur!\thedensity] (A) -- (B) -- (C) -- cycle;&#10;    \foreach \x in {1,...,15}{%&#10;        \pgfmathsetcounter{density}{\thedensity+10}&#10;        \setcounter{density}{\thedensity}&#10;        \path[coordinate] coordinate(X) at (A){};&#10;        \path[coordinate] (A) -- (B) coordinate[pos=.15](A)&#10;                            -- (C) coordinate[pos=.15](B)&#10;                            -- (X) coordinate[pos=.15](C);&#10;        \draw[fill=\couleur!\thedensity] (A)--(B)--(C)--cycle;&#10;    }&#10;\end{tikzpicture}" src="svgs/a00f34be6b1ce8e4820c9852c5e6163e.png" align=middle width="281.2887pt" height="243.69345pt"/></p>

Primero debes crear una 