
function getCep() {
    let cepCliente = document.getElementById('cepCliente').value

    fetch(`https://viacep.com.br/ws/${cepCliente}/json`).then(result => result.json()) 
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
 
document.querySelector("#formularioCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var customer = {}
    var form = document.querySelector("form")
    var data = new FormData(form)
    data.forEach(function(value, key){
        customer[key] = value;
    });
    console.log(customer)

    alert("Cliente Cadastrado")
    document.querySelector("#formularioCadastro").reset()
    
})

