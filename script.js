function getCredentials() {
    const user = document.querySelector('#user'), psw = document.querySelector('#psw'), repeat_psw = document.querySelector('#repeat_psw')

    var credentials = {
        user: user.value,
        psw: psw.value,
        repeat_psw: repeat_psw.value,
        fileName: 'credentials.txt'
    }

    const blob = new Blob([`${credentials.user}\n${credentials.psw}\n${credentials.repeat_psw}`], { type: "text/plain;charset=utf-8" })

    saveAs(blob, credentials.fileName)

    alert("The file has been created, and will be download after closing this alert!")
}