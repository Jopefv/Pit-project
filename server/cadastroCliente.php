<?php
// Recebe os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$datadenacimento = $_POST['data'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];

// Valida os dados (exemplo simples apenas para demonstração)
if (empty($nome) || empty($email) || empty($senha) || empty($datadenacimento) || empty($endereco) || empty($telefone)) {
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