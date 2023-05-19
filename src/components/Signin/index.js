import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Estagio360</Icon>
          <FormContent>
            <Form action="#">
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
