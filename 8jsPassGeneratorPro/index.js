const lengthLabel = document.querySelector("#lengthLabel")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const numbers = document.querySelector("#numbers")
const symbol = document.querySelector("#symbol")
const passInput = document.querySelector("#passInput")
const copy = document.querySelector("#copy")
const generate = document.querySelector("#generate")


const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz"
const numbersStr = "0123456789"
const symbolStr = "!@#$%^&*()_+<>"

let password = '';

generate.addEventListener("click", () => {

    let str = '';

    if (uppercase.checked) {
        str += uppercaseStr

    }
    if (lowercase.checked) {
        str += lowercaseStr
    }
    if (numbers.checked) {
        str += numbersStr
    }
    if (symbol.checked) {
        str += symbolStr
    }
    console.log(str, "str");

    let password = '';

    for (let i = 0; i < lengthLabel.value; i++) {

        let index = Math.floor(Math.random() * str.length);


        password += str[index]
        console.log(str[index]);
    }

    console.log(password);

    passInput.value = password


})


copy.addEventListener('click', () => {
    if (passInput.value === "") {
        alert("Please generate password first")
    } else {
        const newElem = document.createElement('textarea')
        newElem.value = passInput.value;
        document.body.appendChild(newElem)
        newElem.select()
        document.execCommand('copy')
        alert("password copied")
        newElem.remove()
    }
})


// (bpsptroleum)


// const passInput = document.querySelector('#passInput')
// const lengthLabel = document.querySelector('#lengthLabel')
// const uppercase = document.querySelector('#uppercase')
// const lowercase = document.querySelector('#lowercase')
// const numbers = document.querySelector('#numbers')
// const symbol = document.querySelector('#symbol')
// const generate = document.querySelector('#generate')

// let uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let lowercaseStr = 'abcdefghijklmnopqrstuvwxyz'
// let numbersStr = '0123456789'
// let symbolStr = '!@#$%^&*()?'

// let password = ''

// generate.addEventListener('click', () => {
//     let str = ''

//     if (uppercase.checked) { str += uppercaseStr }
//     if (lowercase.checked) { str += lowercaseStr }
//     if (numbers.checked) { str += numbersStr }
//     if (uppercase.symbol) { str += symbolStr }

//     let password = ''

//     for (let i = 0; i < lengthLabel.value; i++) {
//         let index = Math.floor(Math.random() * str.length)

//         password += str[index]
//     }

//     passInput.value = password
// })


// let count=0
// document.getElementById('generate').onclick=function(){
//     count += 1
//     document.getElementById('zero').innerHTML=count
// }
// document.getElementById('dec').onclick=function(){
//     count -= 1
//     document.getElementById('zero').innerHTML=count
// }
// document.getElementById('resr').onclick=function(){
//     count = 0
//     document.getElementById('zero').innerHTML=count
// }




