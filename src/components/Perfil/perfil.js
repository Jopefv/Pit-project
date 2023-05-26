import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ContainerResponseH1, ContainerResponseH2, ContainerResponseP } from "./perfilElements";

const Perfil = () => {
  const [dadosUsuario, setDadosUsuario] = useState(null);

  useEffect(() => {
    // Faz a requisição para obter os dados do usuário
    axios.get('server/perfil.php?tipoCadastro=cliente' || 'server/perfil.php?tipoCadastro=empresa' ) // ou tipoCadastro=empresa, dependendo do caso
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
        <ContainerResponseH1>
          {/* Exiba os dados do usuário */}
          <ContainerResponseH2>{dadosUsuario.nomeCliente || dadosUsuario.nomeEmpresa}</ContainerResponseH2>
          {/* Outros campos de dados do usuário */}
        </ContainerResponseH1>
      ) : (
        <div>
          {/* Exiba uma mensagem de carregamento ou erro */}
          <ContainerResponseP>Carregando...</ContainerResponseP>
        </div>
      )}
    </Container>
  );
};

export default Perfil;
