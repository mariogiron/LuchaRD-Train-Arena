# API Lucha Robótica Definitiva

## Estructura del BOT

El directorio donde alojaremos a nuestro despiadado bot se compone de un único fichero con el nombre **main.js**. Si cambias el nombre de ese fichero no podrás acceder a la arena de lucha y quedarás retratado frente al resto de adversarios que te machacarán sin problema.

Acompañando al fichero main podemos utilizar todas las herramientas necesarias para el funcionamiento del bot, pero la única imprescindible es esta, ¡cacho carne!.

## Eventos de Batalla

Durante el transcurso de cada una de las batallas, el bot irá recibiendo instrucciones de qué está pasando a través de los diferentes métodos que encontrarás dentro del fichero main.js del bot plantilla. Eres libre de quedarte con aquellos métodos que más te interesen y desechar los que no te sean útiles, al fin y al cabo si eres un sádico y te gusta ver cómo se cargan a tu insignificante bot, es cosa tuya.

Aquí tienes una breve descripción de cada uno de los eventos a los que el bot puede acceder:

>## run

Las batallas se desarrollan a través de **turnos**. Habitualmente, se dispone de 30 turnos por segundo, por lo que se pueden realizar muchas acciones para facilitar la fluidez.

Este método se ejecuta en cada uno de los turnos, para que podamos llevar a cabo las acciones habituales del bot. 

Por ejemplo, si te gusta dar paseitos al atardecer viendo las flores, ¡qué mierdas haces aquí!...

```javascript
MiBot.prototype.run = function () {

};
```