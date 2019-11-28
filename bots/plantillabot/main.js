importScripts('../../js/robotBase.js');
importScripts('../../js/utils.js');

MiBot = function () {
    RobotBase.call(this);
    this.name = 'PlantillaBot';
}

MiBot.prototype = Object.create(RobotBase.prototype);
MiBot.prototype.constructor = MiBot;

// Se trata de la función principal
// Aquí se ejecutan las acciones generales del bot.
MiBot.prototype.run = function () {

};

// Cuando el bot se golpea con una pared
MiBot.prototype.onHitWall = function () { };

// Se ejecuta esta función cuando otro bot es escaneado
// Recuperamos información del bot escaneado
MiBot.prototype.onScannedRobot = function (name, direction, distance, heading, velocity, power) { };

// Nos ha dado un misil
MiBot.prototype.onHitByBullet = function (direction, power, velocity) { };

// Uno de nuestros misiles ha impactado en el enemigo
MiBot.prototype.onBulletHitRobot = function (x, y, enemyPower, enemyName) { };

// Un misil se ha escapado y ha dado en la pared
MiBot.prototype.onBulletHitWall = function (x, y) { };

// Función que se lanza al principio de cada ronda
MiBot.prototype.startRound = function () { };

// Nuestro robot ha muerto
MiBot.prototype.onDeath = function () { };

// Salimos victoriosos de la ronda
MiBot.prototype.onWin = function () { };

// Creamos el objeto Robot una vez tenemos todos los métodos implementados
// lo colocamos como listo para que se lance el combate
var robot = new MiBot();
robot.ready();