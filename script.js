const inputs = document.querySelectorAll('input')
inputs.forEach(input =>{
    input.addEventListener('focusout', function(inputValue){
        if(inputValue != ''){
            input.style.marginTop = '0px'
        }
    })
})

function getCEP(param){
    fetch(`https://viacep.com.br/ws/${param}/json/`).then(res => res.json()).then(data =>{
        document.getElementById('city').value = data.localidade
        document.getElementById('state').value = data.uf
        document.getElementById('street').value = data.logradouro
        document.getElementById('district').value = data.bairro
    })
}

