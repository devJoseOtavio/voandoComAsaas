
function getCep() {
    const cepV = document.getElementById('cepCliente').value

    fetch(`https://viacep.com.br/ws/${cepV}/json`).then(result => result.json()) 
    .then(data => { 
        if (!("erro" in data)) {
            document.querySelector('#ruaCliente').value = data.logradouro
            document.querySelector('#bairroCliente').value = data.bairro
            document.querySelector('#cidadeCliente').value = data.localidade
            document.querySelector('#estadoCliente').value = data.uf
        } else {
            alert("CEP não encontrado");
        }
     })
}

document.getElementById('cepCliente').addEventListener('focusout', getCep);


let botaoAdd = document.querySelector("#adicionaCliente")
 
document.querySelector("#listaCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const valueEmail = document.querySelector('#emailCliente').value
    const valueNome = document.querySelector('#nomeCliente').value
    const valueCpf = document.querySelector('#cpfCliente').value
    const valueTelefone = document.querySelector('#telefoneCliente').value
    const valueCep = document.querySelector('#cepCliente').value
    const valueRua = document.querySelector('#ruaCliente').value
    const valueBairro = document.querySelector('#bairroCliente').value
    const valueCidade = document.querySelector('#cidadeCliente').value
    const valueEstado = document.querySelector('#estadoCliente').value
    
    
    console.log(retornaInfo())
    alert("Cliente Cadastrado")
    document.querySelector("#listaCadastro").reset()
    
})

function retornaInfo(){
    return {
        valueEmail: emailCliente.value,
        valueNome: nomeCliente.value,
        valueCpf: cpfCliente.value,
        valueTelefone: telefoneCliente.value,
        valueCep: cepCliente.value,
        valueRua: ruaCliente.value,
        valueBairro: bairroCliente.value,
        valueCidade: cidadeCliente.value,
        valueEstado: estadoCliente.value
    }
}


