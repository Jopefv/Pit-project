import React, { useState } from 'react'
import { LoginBox, LoginBoxH2, LoginBoxForm, UserBox, UserBoxInput, UserBoxLabel, ButtonForm, ButtonFormA, Register, A, Container } from './SignUpEmpresaElements'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUpCliente = () => {
 
  const history = useHistory();
  const [nomeempresa, setNomeempresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefoneempresa, setTelefoneempresa] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envia os dados para o servidor
    axios.post('../BackEnd/cadastroEmpresa.php', { nomeempresa, email, senha, cnpj, endereco, telefoneempresa })
      .then((response) => {
        // Manipula a resposta do servidor
        console.log(response.data);

        history.push('/perfil');
        // Aqui você pode exibir uma mensagem de sucesso ou erro ao usuário
      })
      .catch((error) => {
        // Manipula erros de requisição
        console.error(error);
      });
  };


  return (
<Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm onSubmit={handleSubmit}>
          <UserBox>
            <UserBoxInput type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Nome" />
            <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={nomeempresa} onChange={(event) => setNomeempresa(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="name">Nome</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={cnpj} onChange={(event) => setCnpj(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="dob">Cnpj</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="address">Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={telefoneempresa} onChange={(event) => setTelefoneempresa(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="phone">Telefone</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA id="submit" type="submit" to="/perfil">Cadastrar</ButtonFormA>
            <Register>
              Já possui uma conta?
              <A to="/signin">Login</A>
            </Register>
          </ButtonForm>
        </LoginBoxForm>
      </LoginBox>
    </Container>
  )
}

export default SignUpCliente
