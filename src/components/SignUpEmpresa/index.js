import React from 'react'
import { LoginBox, LoginBoxH2, LoginBoxForm, UserBox, UserBoxInput, UserBoxLabel, ButtonForm, ButtonFormA, Register, A, Container } from './SignUpEmpresaElements'

const SignUpCliente = () => {
  return (
    <Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm>
          <UserBox>
            <UserBoxInput type="text" id="email" required />
            <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" id="password" required />
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" id="name" required />
            <UserBoxLabel htmlFor="nameempresa">Nome Da Empresa</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" id="dob" required />
            <UserBoxLabel htmlFor="cnpj">CNPJ</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" id="address" required />
            <UserBoxLabel htmlFor="address">Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" id="phone" required />
            <UserBoxLabel htmlFor="phoneempresa">Telefone Da Empresa</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA id="submit" to="/">Cadastrar</ButtonFormA>
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
