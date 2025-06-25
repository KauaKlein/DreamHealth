import express from 'express';
import bodyParser from 'body-parser';
import pool from './conectionDb.js';


const app = express();
const port = 3000;


app.use(bodyParser.json());

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
  const { nome, email, senha, nivel } = req.body;
  try {
    const result = await pool.query(
      'UPDATE usuario SET nome = $1, email = $2, senha = $3, nivel = $4 WHERE id_usuario = $5 RETURNING *',
      [nome, email, senha, nivel, id]
    );
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
  const { cidade, bairro, rua, numero } = req.body;
  try {
    const result = await pool.query(
      'UPDATE endereco SET cidade = $1, bairro = $2, rua = $3, numero = $4 WHERE id_endereco = $5 RETURNING *',
      [cidade, bairro, rua, numero, id]
    );
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