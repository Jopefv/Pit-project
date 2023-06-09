import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(45deg, #ff3933 0%, #ff4838 50%,  #ff884a 100%);
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Adicione essa linha para centralizar horizontalmente */

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #010101;
  max-width: 700px; /* Aumente o valor para aumentar a largura do formulário */
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormButton = styled.button`
  background: #edac5a;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background:#fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`

export const ImgContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Img = styled.img`
  width: 200px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
`;

export const Register = styled.div`
  font-size: 14px;
  text-decoration: none;
  color: rgb(139, 139, 139);
  margin: auto;
  width: 60%;
  text-align: center;
  padding: 12px;
`;

export const A = styled(Link)`
margin: auto;
color: #fff;
text-decoration-line: underline;
`;

export const UserBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const UserBoxInput = styled.input`
  position: relative;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export const UserBoxLabel = styled.label`
  position: relative;
  left: 0;
  top: -60px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;
