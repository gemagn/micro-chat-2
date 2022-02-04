input.onButtonPressed(Button.A, function () {
    radio.sendString("hola,este mensaje se emviara en 10 segundos")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
