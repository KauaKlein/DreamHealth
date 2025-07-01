import express from 'express';
import pool from './conectionDb.js';


const app = express();
const port = 3000;


app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/usuarios', async (req, res) => {
  const { nome, email, senha, nivel } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO usuario (nome, email, senha, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, senha, nivel]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const camposPossiveis = ['nome', 'email', 'senha', 'nivel'];
  const campos = [];
  const valores = [];
  let idx = 1;

  for (const campo of camposPossiveis) {
    if (req.body[campo] !== undefined) {
      campos.push(`${campo} = $${idx++}`);
      valores.push(req.body[campo]);
    }
  }

  if (campos.length === 0) {
    return res.status(400).json({ error: 'Nenhum campo para atualizar.' });
  }

  valores.push(id);

  const query = `UPDATE usuario SET ${campos.join(', ')} WHERE id_usuario = $${idx} RETURNING *`;

  try {
    const result = await pool.query(query, valores);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/enderecos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM endereco');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/enderecos', async (req, res) => {
  const { cidade, bairro, rua, numero } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO endereco (cidade, bairro, rua, numero) VALUES ($1, $2, $3, $4) RETURNING *',
      [cidade, bairro, rua, numero]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/enderecos/:id', async (req, res) => {
  const { id } = req.params;
  const camposPossiveis = ['cidade', 'bairro', 'rua', 'numero'];
  const campos = [];
  const valores = [];
  let idx = 1;

  for (const campo of camposPossiveis) {
    if (req.body[campo] !== undefined) {
      campos.push(`${campo} = $${idx++}`);
      valores.push(req.body[campo]);
    }
  }

  if (campos.length === 0) {
    return res.status(400).json({ error: 'Nenhum campo para atualizar.' });
  }

  valores.push(id);

  const query = `UPDATE endereco SET ${campos.join(', ')} WHERE id_endereco = $${idx} RETURNING *`;

  try {
    const result = await pool.query(query, valores);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/enderecos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM endereco WHERE id_endereco = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/usuario_endereco', async (req, res) => {
  const { id_usuario, id_endereco } = req.body;
  try {
    await pool.query(
      'INSERT INTO usuario_endereco (id_usuario, id_endereco) VALUES ($1, $2)',
      [id_usuario, id_endereco]
    );
    res.status(201).json({ message: 'Relacionamento criado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/medicos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM medico');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/medicos', async (req, res) => {
  const { id_usuario, area } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO medico (id_usuario, area) VALUES ($1, $2) RETURNING *',
      [id_usuario, area]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/medicos/:id', async (req, res) => {
  const { id } = req.params;
  const { area } = req.body;
  try {
    const result = await pool.query(
      'UPDATE medico SET area = $1 WHERE id_medico = $2 RETURNING *',
      [area, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/medicos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM medico WHERE id_medico = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});