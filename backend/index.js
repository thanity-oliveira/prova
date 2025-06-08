const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/usuarios', (req, res) => {
  const data = JSON.parse(fs.readFileSync('users.json'));
  res.json(data);
});

app.get('/dados/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('users.json'));
  const user = data.find(u => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).json({ error: 'Usuário não encontrado' });
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));