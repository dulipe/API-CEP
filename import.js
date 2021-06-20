import ChangeCEP from "./Mascaras/Cep.js"
import Email from "./Mascaras/Email.js"
import Phone from "./Mascaras/Phone.js"



document.getElementById('cep').addEventListener('change', (param) => {
    param.target.value = ChangeCEP(param.target.value)
})

document.getElementById('telephone').addEventListener('input', (param) => {
    param.target.value = Phone(param.target.value)
})

document.getElementById('email').addEventListener('change', (param) => {
    param.target.value = Email(param.target.value)
})

