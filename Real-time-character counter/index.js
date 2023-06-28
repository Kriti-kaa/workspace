const textareaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainingE1 = document.getElementById("remaining")
textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter()
function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length
    remainingE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}