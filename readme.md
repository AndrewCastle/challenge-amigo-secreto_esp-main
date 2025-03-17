# DESAFÍO: EL AMIGO SECRETO 😎
En este desafío, desarrollé una aplicación que permite a los usuarios ingresar nombres de amigos en una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto". El usuario puede añadir nombres mediante un campo de texto, y al finalizar, puede hacer clic en un botón para sortear un nombre al azar.

## CARACTERÍSTICAS 📄
- Los usuarios pueden ingresar nombres en un campo de texto y añadirlos a una lista.
- La lista de amigos se muestra en la página.
- El sorteo es realizado mediante un botón, el cual selecciona aleatoriamente uno de los nombres de la lista.
- El resultado del sorteo se muestra en pantalla.

## CONSTRUIDO CON ⚙️
![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?&style=flat-square&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=flat-square&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/Git-%23F05032.svg?&style=flat-square&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-%23007ACC.svg?&logo=visual-studio-code&logoColor=white)

## FUNCIONALIDADES 💡
### 1. Función para agregar amigos:
  - Los usuarios pueden ingresar un nombre en el campo de texto.
  - Con la ayuda del botón "añadir", el nombre se agrega a la lista de amigos.
  - La lista se actualiza cada vez que se agrega un nuevo nombre.

### 2. Función para actualizar la lista de amigos:
  - La lista de amigos se muestra dinámicamente, creando un elemento `<li>` para cada nombre ingresado.
  - Se utiliza `innerHTML` para limpiar la lista antes de mostrar los nuevos elementos.

### 3. Función para sortear amigos:
  - Al hacer clic en el botón de sorteo, se selecciona aleatoriamente un nombre de la lista.
  - La función utiliza `Math.random()` y `Math.floor()` para generar un índice aleatorio y acceder al nombre del arreglo.

## INSTRUCCIONES PARA PROBAR EL PROYECTO 👨🏻‍🏫
Para probar este proyecto en tu máquina local, sigue estos pasos:
- Haz clic en el botón verde "Code" ubicado en la esquina superior derecha de la página del repositorio.
- En el menú desplegable, selecciona "Download ZIP". Esto descargará una copia comprimida de todo el proyecto en tu computadora.
- Una vez completada la descarga, localiza el archivo ZIP en tu carpeta de descargas.
- Haz clic derecho sobre el archivo y selecciona "Extraer todo..." o utiliza tu herramienta de descompresión preferida para descomprimir el contenido en una carpeta de tu elección.
- Navega hasta la carpeta donde extrajiste los archivos.
- Busca el archivo `index.html` y haz doble clic sobre él. Esto abrirá el proyecto en tu navegador predeterminado.
- Ahora solo queda testear el proyecto todo lo que desees, invita a tus amigos y compitan por quien acierta la mayor cantidad de veces al "amigo secreto".

## LICENCIA ✔️
Este proyecto está bajo la licencia MIT.


