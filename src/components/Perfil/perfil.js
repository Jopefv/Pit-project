import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, ContainerDiv, ContainerH1, ContainerH2, ContainerP} from './perfilElements'

const Perfil = () => {
  const [dadosUsuario, setDadosUsuario] = useState(null);

  useEffect(() => {
    // Faz a requisição para obter os dados do usuário
    axios.get('/../BackEnd/perfil.php?tipoCadastro=cliente' || '/../BackEnd/perfil.php?tipoCadastro=empresa' ) // ou tipoCadastro=empresa, dependendo do caso
      .then((response) => {
        // Manipula a resposta do servidor
        const { data } = response;
        setDadosUsuario(data);
      })
      .catch((error) => {
        // Manipula erros de requisição
        console.error(error);
      });
  }, []);

  return (
    <Container>
      {dadosUsuario ? (
        <ContainerH1>
          {/* Exiba os dados do usuário */}
          <ContainerH2>{dadosUsuario.nomeCliente || dadosUsuario.nomeEmpresa}</ContainerH2>
          {/* Outros campos de dados do usuário */}
        </ContainerH1>
      ) : (
        <ContainerDiv>
          {/* Exiba uma mensagem de carregamento ou erro */}
          <ContainerP>Carregando...</ContainerP>
        </ContainerDiv>
      )}
    </Container>
  );
};

export default Perfil;
