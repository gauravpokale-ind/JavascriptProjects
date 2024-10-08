// const input=document.querySelector("#input")
// const output=document.querySelector("#output")

// input.addEventListener('input',()=>{
//     let val=input.value
//     let out=val*2.2;
//     output.innerHTML=out.toFixed(2)
// })



const input=document.querySelector('#input')
const output=document.querySelector('#output')
const calculate=document.querySelector('#calculate')

calculate.addEventListener('click',()=>{
    let val=input.value
    let val2=val*2.2
    output.innerHTML=val2.toFixed(2)
})