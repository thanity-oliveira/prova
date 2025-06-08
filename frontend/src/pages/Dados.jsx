import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const Dados = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/dados/${id}`)
      .then(res => res.json())
      .then(setUsuario)
      .catch(console.error);
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>Dados do Usuário</Typography>
      {usuario ? (
        <>
          <Typography>Nome: {usuario.nome}</Typography>
          <Typography>Email: {usuario.email}</Typography>
          <Typography>Idade: {usuario.idade}</Typography>
        </>
      ) : (
        <Typography>Carregando...</Typography>
      )}
    </div>
  );
};

export default Dados;