function getCredentials() {
    const user = document.querySelector('#user')
    const psw = document.querySelector('#psw')
    const repeat_psw = document.querySelector('#repeat_psw')

    var credentials = user.value + "\n" + psw.value + "\n" + repeat_psw.value   

    var blob = new Blob([credentials], { type: "text/plain;charset=utf-8" })

    saveAs(blob, "test.txt")

    alert("The file has been created!")
}