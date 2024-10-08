// const input=document.querySelector("#password")
// const output=document.querySelector("#output")

// input.addEventListener('input',function(){
//     console.log(input.value);

//     let password=(input.value)

//     if(password.length < 8){
//         output.innerText="Password is too short"
//         output.style.color='red'
//     }
//     else{
//         output.innerText="password is too long"
//         output.style.color='green'

//         console.log("is lowercase",password.search(/[a-z]/));

//         if(password.search(/[a-z]/)==-1){
//             output.innerText="password is missing a lowercase letter"
//             output.style.color='red'
//         }
//         else if(password.search(/[A-Z]/)==-1){
//             output.innerText="password is missing a uppercase letter"
//             output.style.color='red'
//         }
//         else if(password.search(/[0-9]/)==-1){
//             output.innerText="password is missing a numeric letter"
//             output.style.color='red'
//         }
//         else if(password.search(/[\!\@\#\$\%\^\&\*\(\)\<\>]/)==-1){
//             output.innerText="password is missing a special character"
//             output.style.color='red'
//         }
//         else{
//             output.innerText="password is valid"
//             output.style.color="green"
//         }
//     }
// }
// )




const input = document.querySelector("#password")
const output = document.querySelector("#output")

input.addEventListener("input", () => {
    let password = (input.value)

    if (password.length < 8) {
        output.innerText = "pass is too short"
        output.style.color = "red"
    }
    else {
        output.innerText = "pass is too long"
        output.style.color  = "red"

        if (password.search(/[A-Z]/)== -1) {
            output.innerText = "pass should contain capital"
            output.style.color  = "red"
        }
        else if (password.search(/[a-z]/) == -1){
            output.innerText = "pass should contain smallcase"
            output.style.color  = "red"
        }
        else if (password.search(/[0-9]/) == -1){
            output.innerText = "pass should contain numbers"
            output.style.color  = "red"
        }
        else if (password.search(/[!\@\#\$\%\^\&\*]/) == -1){
            output.innerText = "pass should contain symbols"
            output.style.color  = "red"
        }
        else{
            output.innerText = "pass is valid"
            output.style.color  = "green"
        }
    }
}
)