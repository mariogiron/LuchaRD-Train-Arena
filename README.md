# Lucha Robótica Definitiva JS
## Introduction
Esta versión se basa en la versión creada por **jeickmann** que a su vez está basada en el popular robocode, que está basada en darse golpes como panes, pero programando, que siempre es más agradable.

Podrás desarrollar tu propio bot y enfrentarte en la ARENA a los más despiadados enemigos. 

## Setup
Se debe clonar el repositorio y lanzarlo dentro de un servidor http. La forma más sencilla (si tenemos instalado NodeJS) es a través de la librería **http-server**
> npm install http-server

y después lanzar el comando siguiente dentro del directorio del proyecto

> http-server

Puedes arrancar la arena de entrenamiento simplemente accediendo a la siguiente url desde el navegador http://localhost:8080

## Comienza el Entrenamiento
Para poder controlar la arena de batalla, podemos hacerlo a través de la url en el navegador, a través de los parámetros que introducimos. El parámetro más importante es **bot**, mediante el cual podemos especificar qué bot es el que vamos a ponder a luchar.

Ejemplo:
Para lanzar una batalla entre el bot de entrenamiento y el bot llamado __plantillabot__ debemos acceder a la siguiente url:

> http://localhost:8080/?bot=plantillabot

Para crear nuestro propio robot, podemos modificar el existente dentro del directorio **bots/plantillabot**. Se le puede cambiar el nombre al directorio por el de nuestro bot, siempre y cuando adaptemos la url en el momento de lanzar la batalla.

Todos los bots disponen de un fichero **main.js** donde se encuentra todo el código necesario para poder interatuar con las diferentes acciones del bot. 

Puedes acceder a la documentación específica del API para manejar tu robot desde los siguientes enlaces:

[API Eventos LuchaRobóticaDefinitivaJS](md/eventos.md)

[API Métodos LuchaRobóticaDefinitivaJS](md/metodos.md)