const input = document.querySelector('input')
const btnSha = document.querySelector('.btn-SHA-1')
const btnMd5 = document.querySelector('.btn-MD5')
const textarea  = document.querySelector('textarea')
const icon = document.querySelector('.icon')
const body = document.querySelector('body')
console.log(body)
function handleSHA1 () {
    let value = input.value.trim()
    if(!value) {
        alert("Hãy nhập nội dung vào !")
        return false;
    }
    let type = btnSha.textContent
    let hash = CryptoJS.SHA1(value).toString()
    let bit = hash.length * 4;
    let message = input.value
    // let byte = hash.length * 0.5;
    // lưu dữ liệu
    const text = {
        type : type,
        hash : hash,
        bit : bit,
        message : message
    }

    let content = `Type : ${text.type}
    Hex : ${text.hash}
    Bit : ${text.bit}
    Message: ${text.message}`
   
    textarea.innerHTML = content
}   
function handleMD5 () {
    let value = input.value.trim()
    if(!value) {
        alert("Hãy nhập nội dung vào !")
        return false;
    }
    let type = btnMd5.textContent
    let hash = CryptoJS.MD5(value).toString()
    let bit = hash.length * 4;
    let message = input.value
    // let byte = hash.length * 0.5;

    // lưu dữ liệu
    const text = {
        type : type,
        hash : hash,
        bit : bit,
        message : message
    }
    let p = document.createElement("p");
    p = `Type : ${text.type}
            Hex : ${text.hash}
            Bit : ${text.bit}
            Message: ${text.message}
    `
    
    textarea.innerHTML = p
  
}
btnSha.addEventListener('click', () => handleSHA1())
btnMd5.addEventListener('click', () => handleMD5())
icon.onclick = function () {
    input.value = ''
}
