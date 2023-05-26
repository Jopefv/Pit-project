import styled from 'styled-components';
//import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #000;
`

const ContainerH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

`;

const ContainerH2 = styled.h2`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

`;

const ContainerDiv = styled.div`
  /* Estilos da div de carregamento ou erro */
`;

const ContainerP = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
