input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(100)
    Véletlen = Math.randomBoolean()
    if (Véletlen == true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + (randint(0, 10)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Marci")
})
let Véletlen = false
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
