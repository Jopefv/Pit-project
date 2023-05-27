import React, { useState } from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormButton,
  Img,
  ImgContainer,
  Register,
  A,
  UserBox,
  UserBoxInput,
  UserBoxLabel
} from './SigninElements';
import logo from './../../images/logo.png';
import axios from 'axios';


const SignIn = () => {
  const [data, setData] = useState({
    email:'',
    password:'',

  })
  
  const loginUser = (e) =>{
    e.preventDefault()
    axios.get('/')
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={loginUser}>
              <ImgContainer to="/">
                <Img src={logo} alt="Imagem" className="image" />
              </ImgContainer>
              <UserBox>
            <UserBoxInput type="text"  placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Senha"  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
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
