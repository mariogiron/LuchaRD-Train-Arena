importScripts('../../js/robotBase.js');
importScripts('../../js/utils.js');

Testbot = function () {
    RobotBase.call(this);
    this.name = 'TrainBOT';
}

Testbot.prototype = Object.create(RobotBase.prototype);
Testbot.prototype.constructor = Testbot;

Testbot.prototype.run = function () {
    this.moveForward(100);
};

Testbot.prototype.onHitWall = function () {
    console.log('OUCH');
    dir * -1;
    this.moveForward(520 * dir);
    this.turnRight(Math.PI);
}

Testbot.prototype.onScannedRobot = function (name, direction, distance, heading, velocity, power) {
    var gunTurn = normalizeDiffAngle(direction - this.gunAngle);
    this.turnGunRight(gunTurn);
    if (gunTurn < 0.1) {
        this.fire(3);
    }
}

Testbot.prototype.startRound = function () {
    console.log('NEW ROUND');
    started = false;
    dir = 1;
    this.enemyDetected = false;
}

var robot = new Testbot();
robot.ready();