import fs from 'fs'

function getCredentials() {
    var text = "The data has been saved."
    const user = document.querySelector('#user')
    const passwd = document.querySelector('#passwd')
    const repeat_passwd = document.querySelector('#repeat_passwd')
    const submit = document.querySelector('#submit')
    var credentials = new Array(user.value, passwd.value, repeat_passwd.value)

    var blob = new Blob([text], { type: "text/plain;charset=utf-8" })

    saveAs(f, "test.txt")

    alert("The file has been created!")
}