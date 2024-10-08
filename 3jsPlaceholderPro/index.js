const select = document.querySelector('select')
const inputAll = document.querySelectorAll('input')
let myImge = document.querySelector('img')
let textArea = document.querySelector("textarea")

console.log(inputAll);

let urlObj = {}

const removeHashTag = (str) => {
    return str.replace("#", "")
}

const addPlus = (str) => {

    const strr = str.split(" ").join("+")
    return strr.trim("   ")
}

const createImagePath = () => {

    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value)
    urlObj.bgClr = removeHashTag(inputAll[1].value)
    urlObj.txtClr = removeHashTag(inputAll[2].value)

    // alert("hello from Gaurav")
    let urlPath = `https://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`

    myImge.src = urlPath;
    textArea.value = urlPath;

    textArea.focus()
    textArea.select()

    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log("text copied to clipboard");
        })
        .catch(err => {
            console.log("error for copying", err);
        })

}

inputAll.forEach((curElem) => curElem.addEventListener('change', createImagePath))

select.addEventListener("change", createImagePath)



// const select = document.querySelector('select')
// const inpAll = document.querySelectorAll('input')
// let myImg = document.querySelector('img')
// const textArea = document.querySelector('textarea')


// let urlImgg={}

// const removeHashTag=(str)=>{
//     return str.replace('#',"")
// }

// const addPlus=(str)=>{
//     const strr=str.split(" ").join("+")
//     return strr.trim("  ")
// }

// const createImagePath=()=>{
// urlImgg.size=select.value
// urlImgg.text=addPlus(inpAll[0].value)
// urlImgg.bgClr=removeHashTag(inpAll[1].value)
// urlImgg.textClr=removeHashTag(inpAll[2].value)

// let urlPath=`https://via.placeholder.com/${urlImgg.size}/${urlImgg.bgClr}/${urlImgg.txtClr}?text=${urlImgg.text}`

// myImg.src=urlPath
// textArea.value=urlPath

// textArea.focus()
// textArea.select()


// navigator.clipboard.writeText(textArea.value)
// .then(()=>{console.log('text copied');})
// .catch(err=>{
//     console.log('err',err);
// })
// }

// inpAll.forEach((curELem)=>curELem.addEventListener('change',createImagePath))

// select.addEventListener('change',createImagePath)