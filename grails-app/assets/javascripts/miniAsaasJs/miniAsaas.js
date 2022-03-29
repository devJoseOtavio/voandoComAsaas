
function getCep() {
    const cepV = document.getElementById('cepCliente').value

    fetch(`https://viacep.com.br/ws/${cepV}/json`).then(result => result.json()) 
    .then(data => { 
        let ruaV = document.querySelector('#ruaCliente').value = data.logradouro
        let bairroV =  document.querySelector('#bairroCliente').value = data.bairro
        let cidadeV =  document.querySelector('#cidadeCliente').value = data.localidade
        let estadoV =  document.querySelector('#estadoCliente').value = data.uf
     })
}

document.getElementById('cepCliente').addEventListener('focusout', getCep);


let botaoAdd = document.querySelector("#adicionaCliente")

let emailV = document.querySelector('#emailCliente')
let nomeV = document.querySelector('#nomeCliente')
let cpfV = document.querySelector('#cpfCliente')
let telefoneV = document.querySelector('#telefoneCliente')
let cepV =  document.querySelector('#cepCliente')
let ruaV = document.querySelector('#ruaCliente')
let bairroV =  document.querySelector('#bairroCliente')
let cidadeV =  document.querySelector('#cidadeCliente')
let estadoV =  document.querySelector('#estadoCliente')

document.querySelector("#listaCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const valueEmail = emailV.value
    const valueNome = nomeV.value
    const valueCpf = cpfV.value
    const valueTelefone = telefoneV.value
    const valueCep = cepV.value
    const valueRua = ruaV.value
    const valueBairro = bairroV.value
    const valueCidade = cidadeV.value
    const valueEstado = estadoV.value
    
    
    console.log(retornaInfo())
    alert("Cliente Cadastrado")
    document.querySelector("#listaCadastro").reset()
    
})

function retornaInfo(){
    return {
        valueEmail: emailV.value,
        valueNome: nomeV.value,
        valueCpf: cpfV.value,
        valueTelefone: telefoneV.v,
        valueCep: cepV.value,
        valueRua: ruaV.value,
        valueBairro: bairroV.value,
        valueCidade: cidadeV.value,
        valueEstado: estadoV.value
    }
}


