# Métodos API Lucha Robótica Definitiva JS

Todos los métodos que listamos a continuación pueden usarse dentro del método **run** para hacer que nuestro robot menee la carcasa o dentro de cualquiera de los otros eventos. 

La llamada a cada una de estos métodos simplemente lanzará la acción, que se irá realizando a lo largo de los siguientes turnos. 

Ejemplo: Si llamamos al método **moveForward(100)** y posteriormente al método **moveBackward(100)**, la segunda acción no se llevará a cabo hasta que termine la primera. 

**NOTA** Todos los ángulos están especificados en Radianes. De todas maneras, dispones de las funciones degrees2radions(degrees) y radians2degrees(radians) para poder hacer transformaciones.

## Métodos disponibles

### Giro del robot a izquierda o derecha
---

```javascript
this.turnRight(radians);
this.turnLeft(radians);
```

### Giro del arma
---

```javascript
this.turnGunRight(radians);
this.turnGunLeft(radians);
```

Gira el arma situada en la parte superior del robot. Cuando el robot gira, el arma también gira, pero con estos métodos tiene su independencia. 

El arma puede girar 20º por turno.

### Giro del radar
---

```javascript
this.turnRadarRight(radians);
this.turnRadarLeft(radians);
```

Movimiento del radar situado en la parte superior del arma. Como antes, cuando el arma gira, el radar también gira. 

### Corrección de movimiento
---

```javascript
this.setAdjustGunForRobotTurn(true);
this.setAdjustRadarForGunTurn(true);
```

Estos dos métodos nos permiten rectificar el movimiento del arma sobre el movimiento del robot y del radar sobre el arma, respectivamente.

### Movimiento del Robot
---

```javascript
this.moveForward(distance);
this.moveBack(distance);
```

El movimiento se realiza con 1px/turno

### Disparar!!
---

```javascript
this.fire(firingPower);
```

La potencia del disparo (firingPower) puede tomar valores desde 0.1 a 3. El robot sólo va a disparar cuando el arma esté fría. Cuanto más potencia de disparo utilicemos, más se recalienta el arma.

Si la potencia que utilizamos es muy alta, es decir, cercana a 3, las balas son más lentas y causan más daño en el rival. La potencia de disparo se obtiene de la vida del robot que dispara. Si logramos impactar en el enemigo, recuperamos vida.

### Métodos Útiles
---

**this.x this.y** 
Posición actual del robot. Cuando arranca la ronda el roboto se sitúa en un punto aleatorio.

**this.angle**
El ángulo hacia donde está mirando el robot.

**this.gunAngle**
El ángulo del arma

**this.radarAngle**
El ángulo del radar

**this.arenaWidth this.arenaHeight**
El tamaño de la arena donde se celebra la batalla