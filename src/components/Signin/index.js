import React from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
  Img,
  ImgContainer
} from './SigninElements';
import logo from './../../images/logo.png';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          {/*<Icon to="/">Estagio360</Icon>*/}
          <FormContent>
            <Form action="#">
            <ImgContainer to="/">
              <Img src={logo} alt="Imagem" className="image"/>
              </ImgContainer>
              <FormH1>Entre na sua conta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput htmlFor="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
