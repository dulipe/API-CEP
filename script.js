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

// script da tabela

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

function cadastrar() {
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('telephone').value
    const cep = document.getElementById('cep').value
    const rua = document.getElementById('street').value
    const bairro = document.getElementById('district').value
    const cidade = document.getElementById('city').value
    const estado = document.getElementById('state').value

    if(nome === '' || email === '' || tel === '' || cep === '' || rua === '' || bairro === '' || cidade === '' || estado ==='') {
        alert('Digite todos os dados')
    } else {
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
}

function contador() {
    document.getElementById('contador').innerHTML = `Atualmente temos ${usuarios.length} usuarios cadastrados`
}

