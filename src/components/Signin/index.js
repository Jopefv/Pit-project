import React, { useState } from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Img,
  ImgContainer,
  Register,
  A
} from './SigninElements';
import logo from './../../images/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    // Envia a requisição para o backend em PHP para autenticação
    fetch('api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          alert('Autenticado com sucesso!');
          // Lógica adicional após a autenticação bem-sucedida, como redirecionar para uma página interna
        } else {
          alert('Autenticação falhou!');
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSignIn}>
              <ImgContainer to="/">
                <Img src={logo} alt="Imagem" className="image" />
              </ImgContainer>
              <FormH1>Entre na sua conta</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInput
                type="password"
                id="password"
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <FormButton type="submit">Continue</FormButton>
              <Register>
                Não possui conta? <A to="/signup">Cadastre-se</A>
              </Register>
              <Register>
                Esqueceu sua senha?
              </Register>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
