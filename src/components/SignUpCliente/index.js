import React, { useState } from 'react'
import { LoginBox, LoginBoxH2, LoginBoxForm, UserBox, UserBoxInput, UserBoxLabel, ButtonForm, ButtonFormA, Register, A, Container } from './SignUpClienteElements'
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const SignUpCliente = () => {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [date, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envia os dados para o servidor
    axios.post('../BackEnd/cadastroCliente.php', { nome, email, senha, date, endereco, telefone })
      .then((response) => {
        // Manipula a resposta do servidor
        console.log(response.data);

        history.push('/perfilPage');
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
            <UserBoxInput type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Senha"  />
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Nome"  />
            <UserBoxLabel htmlFor="name">Nome</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={date} onChange={(event) => setData(event.target.value)} placeholder="Data de Nascimento"  />
            <UserBoxLabel htmlFor="dob">Data de Nascimento</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} placeholder="Endereço"  />
            <UserBoxLabel htmlFor="address">Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} placeholder="Telefone"  />
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
