import React, { useState } from 'react'
import { LoginBox, LoginBoxH2, LoginBoxForm, UserBox, UserBoxInput, UserBoxLabel, ButtonForm, ButtonFormA, Register, A, Container } from './SignUpEmpresaElements'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const SignUpCliente = () => {
  const history = useHistory()
  const [data, setData] = useState({
    namecom: '',
    emailcom:'',
    passwordcom:'',
    cnpj:'',
    addresscom:'', 
    phonecom:''
  })
 
const registerCompany = async (e) => {
  e.preventDefault();
  const {namecom , emailcom, passwordcom, cnpj, addresscom, phonecom} = data

  try {
    const {data} = await axios.post('/registerCompany', {
      namecom , emailcom, passwordcom, cnpj, addresscom, phonecom
    })
    if (data.error){
      toast.error(data.error)
    } else{
      setData({})
      toast.success('Login Sucessful. Welcome!')
      history.push('/signin')
    }
  } catch (error) {
    console.log(error)
  }
}


  return (
<Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm  onSubmit={registerCompany}>
          <UserBox>
            <UserBoxInput type="text" placeholder="E-mail Empresa" value={data.emailcom} onChange={(e) => setData({...data, emailcom: e.target.value})}/>
            <UserBoxLabel htmlFor="email">E-mail Empresa</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Senha"  value={data.passwordcom} onChange={(e) => setData({...data, passwordcom: e.target.value})}/>
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Nome da Empresa" value={data.namecom} onChange={(e) => setData({...data, namecom: e.target.value})} />
            <UserBoxLabel htmlFor="name">Nome Empresa</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Cnpj"  value={data.cnpj} onChange={(e) => setData({...data, cnpj: e.target.value})}/>
            <UserBoxLabel htmlFor="dob">Cnpj</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Endereço"  value={data.addresscom} onChange={(e) => setData({...data, addresscom: e.target.value})}/>
            <UserBoxLabel htmlFor="address">Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" placeholder="Telefone da empresa"  value={data.phonecom} onChange={(e) => setData({...data, phonecom: e.target.value})}/>
            <UserBoxLabel htmlFor="phone">Telefone da Empresa</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA type="submit" to="/signin">Cadastrar</ButtonFormA>
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


