let velocidad_derecha = 0
let velocidad_izquierda = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    velocidad_izquierda = randint(-100, 100)
    velocidad_derecha = randint(-100, 100)
    cuteBot.motors(velocidad_izquierda, velocidad_derecha)
    basic.pause(1000)
})
