//Jogando valores do array na tabela
const usuarios = JSON.parse(localStorage.getItem('usuarios'))

function render() {
    const tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    for (let i of usuarios) {
        const pos = usuarios.indexOf(i)       
        const user = `
            <tr>
                <td>${i.nome}</td>               
                <td>${i.tel}</td>
                <td>${i.email}</td>
                <td>${i.cep}</td>
                <td>${i.estado}</td>
                <td>${i.cidade}</td>
                <td>${i.rua}</td>
                <td>${i.bairro}</td>                
                <td>${i.data}</td>
                <td><button onclick="del(${pos})">Del</button></td>
            </tr>
        `
        tbody.innerHTML += user
        document.getElementById('contador').innerHTML = `Atualmente temos ${usuarios.length} usuarios cadastrados`
    }
}

//função para deletar a linha da tabela

function del(pos) {
    usuarios.splice(pos, 1)
    render()
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.getElementById('contador').innerHTML = `Atualmente temos ${usuarios.length} usuarios cadastrados`
}