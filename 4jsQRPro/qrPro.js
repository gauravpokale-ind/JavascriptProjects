const qrInp = document.querySelector('#qrInp')
const qrButton = document.querySelector('#qrButton')
const qrImg = document.querySelector('#qrImg')

qrButton.addEventListener('click', () => {

    const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    const qrValue = qrInp.value

    // if (!qrValue) {
    //     alert('please enter text here')
    //     return
    // }
    // else {
    //     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    //     qrImg.alt = `errer ${qrValue}`
    // }
    //   OR
    // return(
    //     (!qrValue) ?'please enter text here' : qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}` 
    // )
    //    OR

    //  try  {
    //     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    //  } catch (error) {
    //     throw error
    //  }

    //   OR

    if (qrValue) {
        qrImg.src = `${url}${qrValue}`
        qrImg.alt = `errer ${qrValue}`
    } else {
        error
    }
})