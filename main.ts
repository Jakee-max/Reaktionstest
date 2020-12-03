input.onButtonPressed(Button.A, function () {
    if (LR == 0) {
        Reaktionszeit = input.runningTime() - Startzeit
        for (let index = 0; index < 3; index++) {
            basic.showNumber(Reaktionszeit)
            basic.showString("ms")
        }
    } else {
        basic.showString("Game Over")
    }
})
input.onButtonPressed(Button.B, function () {
    if (LR == 1) {
        Reaktionszeit = input.runningTime() - Startzeit
        for (let index = 0; index < 3; index++) {
            basic.showNumber(Reaktionszeit)
            basic.showString("ms")
        }
    } else {
        basic.showString("Game Over")
    }
})
let Startzeit = 0
let Reaktionszeit = 0
let LR = 0
basic.showString("Reaktionstest")
basic.forever(function () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    if (0 == randint(0, 1)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        LR = 0
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        LR = 1
    }
    Startzeit = input.runningTime()
    basic.pause(5000)
})
