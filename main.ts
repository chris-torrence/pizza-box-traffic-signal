function GREEN1 () {
    makerbit.setDigitalPin(Red1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green1, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Red3, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow3, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green3, makerbit.level(PinLevel.High))
}
function YELLOW1 () {
    makerbit.setDigitalPin(Red1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow1, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Green1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Red3, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow3, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Green3, makerbit.level(PinLevel.Low))
}
function GREEN2 () {
    makerbit.setDigitalPin(Red2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green2, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Red4, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow4, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green4, makerbit.level(PinLevel.High))
}
function RED2 () {
    makerbit.setDigitalPin(Red2, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Yellow2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Red4, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Yellow4, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green4, makerbit.level(PinLevel.Low))
}
function YELLOW2 () {
    makerbit.setDigitalPin(Red2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow2, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Green2, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Red4, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Yellow4, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Green4, makerbit.level(PinLevel.Low))
}
function RED1 () {
    makerbit.setDigitalPin(Red1, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Yellow1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green1, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Red3, makerbit.level(PinLevel.High))
    makerbit.setDigitalPin(Yellow3, makerbit.level(PinLevel.Low))
    makerbit.setDigitalPin(Green3, makerbit.level(PinLevel.Low))
}
let Green4 = 0
let Yellow4 = 0
let Red4 = 0
let Green3 = 0
let Yellow3 = 0
let Red3 = 0
let Green2 = 0
let Yellow2 = 0
let Red2 = 0
let Green1 = 0
let Yellow1 = 0
let Red1 = 0
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.pause(1000)
led.enable(false)
makerbit.setLedPins(makerbit.level(PinLevel.Low))
Red1 = 5
Yellow1 = 6
Green1 = 7
Red2 = 8
Yellow2 = 9
Green2 = 10
Red3 = 11
Yellow3 = 12
Green3 = 13
Red4 = 14
Yellow4 = 15
Green4 = 16
basic.forever(function () {
    GREEN1()
    RED2()
    basic.pause(4000)
    YELLOW1()
    basic.pause(1000)
    RED1()
    GREEN2()
    basic.pause(4000)
    YELLOW2()
    basic.pause(1000)
})
