const inputs = document.querySelectorAll('input')
inputs.forEach(input =>{
    input.addEventListener('focusout', function(inputValue){
        if(inputValue != ''){
            input.style.marginTop = '0px'
        }
    })
})

function GetCEP(param){
    fetch(`https://viacep.com.br/ws/${param}/json/`).then(res => res.json()).then(data =>{
        document.getElementById('city').value = data.localidade
        document.getElementById('state').value = data.uf
        document.getElementById('street').value = data.logradouro
        document.getElementById('district').value = data.bairro
    })
}

function Phone(param) {
    return param
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{1})/, '$1')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
}

function Email(param) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(param) === false) {
        return 'Email invalido'
    } else {
        return param
    }
}

function ChangeCEP(param){
    return param
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
}


document.getElementById('cep').addEventListener('change', (param) => {
    param.target.value = ChangeCEP(param.target.value)
})

document.getElementById('telephone').addEventListener('input', (param) => {
    param.target.value = Phone(param.target.value)
})

document.getElementById('email').addEventListener('change', (param) => {
    param.target.value = Email(param.target.value)
})


// script da tabela

const usuarios = []

function cadastrar() {
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('telephone').value
    const cep = document.getElementById('cep').value
    const rua = document.getElementById('street').value
    const bairro = document.getElementById('district').value
    const cidade = document.getElementById('city').value
    const estado = document.getElementById('state').value

    const usuario = {
        email,
        tel,
        cep,
        rua,
        bairro,
        cidade,
        estado,
        data: new Date().toLocaleDateString(),
        nome,
    }
    
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.querySelectorAll('input').innerHTML= ''
    contador()
    
}

function contador() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    document.getElementById('contador').innerHTML = `Atualmente temos ${usuarios.length} usuarios cadastrados`
}

