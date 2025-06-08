import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, Typography } from '@mui/material';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      <List>
        {usuarios.map(user => (
          <ListItem key={user.id}>
            <Button
              variant="outlined"
              onClick={() => window.open(`/dados/${user.id}`, '_blank')}
            >
              {user.nome}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Usuarios;