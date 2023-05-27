import React, { useState } from 'react';
import {
  LoginBox,
  LoginBoxH2,
  LoginBoxForm,
  UserBox,
  UserBoxInput,
  UserBoxLabel,
  ButtonForm,
  ButtonFormA,
  Register,
  A,
  Container,
} from './SignUpClienteElements';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const SignUpCliente = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    address: '',
    phone: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, dateOfBirth, address, phone } = data;
    try {
      const { data } = await axios.post('/registerUser', {
        name,
        email,
        password,
        dateOfBirth,
        address,
        phone,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Login Sucessful. Welcome');
        history.push('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm onSubmit={registerUser}>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Senha"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Nome"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <UserBoxLabel htmlFor="name">Nome</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Data de Nascimento"
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({ ...data, dateOfBirth: e.target.value })
              }
            />
            <UserBoxLabel htmlFor="dob">Data de Nascimento</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Endereço"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <UserBoxLabel htmlFor="address">Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Telefone"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <UserBoxLabel htmlFor="phone">Telefone</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA type="submit" to="/signin">
              Cadastrar
            </ButtonFormA>
            <Register>
              Já possui uma conta?
              <A to="/signin">Login</A>
            </Register>
          </ButtonForm>
        </LoginBoxForm>
      </LoginBox>
    </Container>
  );
};

export default SignUpCliente;
