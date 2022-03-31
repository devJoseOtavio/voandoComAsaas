<!DOCTYPE html>
<html lang="en">
<head>
    <asset:stylesheet src="miniAsaasCss/miniAsaas.css" rel="stylesheet" />
    <title>AsaasCadastro</title>
</head>

<body>
    <main>
        <div class="containerImg">  
            <asset:image src="skin/miniAsaas/asaas.jpg" alt="asaas" />
        </div>
        <h1 id="cadastroCliente">Cadastro</h1>
        <form id="listaCadastro"> 
            <div class="listaCss">
                <input id="emailCliente" name="email" type="text" placeholder="Email" class="campo" required>
            </div>
            <div class="listaCss">
                <input id="nomeCliente" name="nome" type="text" placeholder="Nome Completo" required>
            </div>
            <div class="listaCss">
                <input id="cpfCliente" name="CPF" type="text" placeholder="CPF" required>
            </div>
            <div class="listaCss">
                <input id="telefoneCliente" name="telefone" type="text" placeholder="Telefone" required>
            </div>
            <div class="listaCss">
                <input id="cepCliente" name="cep" type="text" placeholder="CEP" required>
            </div>
            <div class="listaCss">
                <input id="ruaCliente" name="rua" type="text" placeholder="Rua">
            </div>
            <div class="listaCss">
                <input id="bairroCliente" name="bairro" type="text" placeholder="Bairro">
            </div>
            <div class="listaCss">
                <input id="cidadeCliente" name="cidade" type="text" placeholder="Cidade">
            </div>
            <div class="listaCss">
                <input id="estadoCliente" name="estado" type="text" placeholder="Estado">
            </div>
            <button id="adicionaCliente" class="botao" type="submit">ADICIONAR</button>
        </form>
    </main>
    <asset:javascript src="miniAsaasJs/miniAsaas.js" />
</body>
</html>