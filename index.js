let characters = []
let password1 = document.getElementById("password-box1")
let password2 = document.getElementById("password-box2")
let password3 = document.getElementById("password-box3")
let password4 = document.getElementById("password-box4")
for (let i = 32; i < 127; i++) {
    characters.push(String.fromCharCode(i))
}
let randomNumber = 0
function generatePassword() {
    password1.textContent=" "
    password2.textContent=" "
    password3.textContent=" "
    password4.textContent=" "
    for (let i=0; i<8; i++){
        randomNumber = Math.floor((Math.random()*characters.length))
        password1.textContent += characters[randomNumber] + " "
        
        randomNumber = Math.floor((Math.random()*characters.length))
        password2.textContent += characters[randomNumber] + " "
        
        randomNumber = Math.floor((Math.random()*characters.length))
        password3.textContent += characters[randomNumber] + " "
        
        randomNumber = Math.floor((Math.random()*characters.length))
        password4.textContent += characters[randomNumber] + " "
    }    
} 

function myFunction() {
  var copyText = document.getElementById("password-box1");
  navigator.clipboard.writeText(copyText.value);
}