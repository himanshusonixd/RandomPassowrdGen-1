console.log("starting")
let x = 0;
let range = document.getElementById("range")
let input = document.getElementById("input")
let textarea = document.getElementById("textarea")
let specialchar = document.getElementById("symbols")

let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let small = "abcdefghijklmnopqrstuvwxyz"
let symbols = "!@#$%^&*()"
let numbers = "1234567890"

function password() {
    let password=""
    let chars = "";
    
    chars= chars+capital+small+numbers+symbols
    
    
    for (let i = 0; i < 10; i++) {
        let random1 = Math.floor(Math.random() * chars.length)
        password += chars[random1]
    }

       

    console.log(chars)
    
    textarea.value= password
}

input.addEventListener("click", password)