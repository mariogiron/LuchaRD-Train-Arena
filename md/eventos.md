# API Lucha Robótica Definitiva

## Estructura del BOT

El directorio donde alojaremos a nuestro despiadado bot se compone de un único fichero con el nombre **main.js**. Si cambias el nombre de ese fichero no podrás acceder a la arena de lucha y quedarás retratado frente al resto de adversarios que te machacarán sin problema.

Acompañando al fichero main podemos utilizar todas las herramientas necesarias para el funcionamiento del bot, pero la única imprescindible es esta, ¡cacho carne!.

## Eventos de Batalla

Durante el transcurso de cada una de las batallas, el bot irá recibiendo instrucciones de qué está pasando a través de los diferentes métodos que encontrarás dentro del fichero main.js del bot plantilla. Eres libre de quedarte con aquellos métodos que más te interesen y desechar los que no te sean útiles, al fin y al cabo si eres un sádico y te gusta ver cómo se cargan a tu insignificante bot, es cosa tuya.

Aquí tienes una breve descripción de cada uno de los eventos a los que el bot puede acceder:

### run

Las batallas se desarrollan a través de **turnos**. Habitualmente, se dispone de 30 turnos por segundo, por lo que se pueden realizar muchas acciones para facilitar la fluidez.

Este método se ejecuta en cada uno de los turnos, para que podamos llevar a cabo las acciones habituales del bot. 

Por ejemplo, si te gusta dar paseitos al atardecer viendo las flores, ¡qué mierdas haces aquí!...

```javascript
MiBot.prototype.run = function () { };
```

### onHitWall

Este evento se lanza cuando el bot se mete una galleta contra una de las paredes. A partir de ahí, tú decides qué hacer, te puedes quedar dándote golpes contra la pared como a un Sim que le han quitado las puertas.

```javascript
MiBot.prototype.onHitWall = function () { };
```

### onScannedRobot

Cuando un robot pasa por delante de nuestro scanner, recibimos toda la información en este método. Todos los datos necesarios para soltarle un misilazo a todo aquel que se ponga en tu camino.

```javascript
MiBot.prototype.onScannedRobot = function (name, direction, distance, heading, velocity, power) { };
```

### onHitByBullet 

Cada vez que nos impacta un misil, obtendremos cierta información del impacto en este método.

En tu mano queda quedarte llorando en una esquina o devolver el golpe más fuerte.

```javascript
MiBot.prototype.onHitByBullet = function (direction, power, velocity) { };
```

### onBulletHitRobot

Si somos buenos pistoleros y somos capaces de atizar a alguien, recibiremos información del impacto dentro de este método. Eso sí, puede ser que le calentemos el hocico metálico a algún bot y nos llevemos alguna colleja.

```javascript
MiBot.prototype.onBulletHitRobot = function (x, y, enemyPower, enemyName) { };
```

### onBulletHitWall

La mayoría de las veces, nuestra mala puntería nos llevará a fallar los disparos, es por eso que este método nos avisa cuando nuestras balas han tocado la pared, para que podamos llorar agusto por nuestros fallos.

```javascript
MiBot.prototype.onBulletHitWall = function (x, y) { };
```

### startRound

En cada una de las rondas podemos poner a punto nuestro bot para que esté limpito y listo para soltar guantazos.

```javascript
MiBot.prototype.startRound = function () { };
```

### onDeath

Si te hace ilusión saber cuando te han ganado y estás muerto y hundido en la miseria, este método es el que debes elegir para dicho momento.

```javascript
MiBot.prototype.onDeath = function () { };
```

### onWin

Quizá en algún momento de tu vida llegues a ganar alguna ronda... Si esa utopía llega a suceder, este evento será el primero en avisarte

```javascript
MiBot.prototype.onWin = function () { };
```