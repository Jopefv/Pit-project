<?php
// Recebe os dados do formulário
$nomeempresa = $_POST['nomeempresa'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$cnpj = $_POST['cnpj'];
$endereco = $_POST['endereco'];
$telefoneempresa = $_POST['telefoneempresa'];

// Valida os dados (exemplo simples apenas para demonstração)
if (empty($nome) || empty($email) || empty($senha) || empty($cnpj) || empty($endereco) || empty($telefoneempresa)) {
    // Retorna uma resposta de erro se algum campo estiver vazio
    $response = [
        'success' => false,
        'message' => 'Todos os campos devem ser preenchidos.'
    ];
} else {
    // Simula o cadastro no banco de dados (ou qualquer outra lógica de validação)
    // Aqui você pode adicionar sua lógica para verificar se o e-mail já existe, por exemplo

    // Retorna uma resposta de sucesso
    $response = [
        'success' => true,
        'message' => 'Cadastro realizado com sucesso.'
    ];
}

// Converte a resposta para JSON
$jsonResponse = json_encode($response);

// Retorna a resposta
header('Content-Type: application/json');
echo $jsonResponse;