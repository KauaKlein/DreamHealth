import pool from '../services/conectionDb.js';

// Usuários
export const getUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postUsuario = async (req, res) => {
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
};

export const putUsuario = async (req, res) => {
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
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endereços
export const getEnderecos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM endereco');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postEndereco = async (req, res) => {
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
};

export const putEndereco = async (req, res) => {
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
};

export const deleteEndereco = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM endereco WHERE id_endereco = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Relacionamento usuário-endereço
export const postUsuarioEndereco = async (req, res) => {
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
};

//medicos
export const getMedicos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM medico');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postMedico = async (req, res) => {
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
};

export const putMedico = async (req, res) => {
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
};

export const deleteMedico = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM medico WHERE id_medico = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//consultas
export const getConsultas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM consulta');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postConsulta = async (req, res) => {
  const { id_medico, id_paciente, data_consulta, descricao } = req.body;
  const desc = descricao || 'consulta geral';
  try {
    const result = await pool.query(
      'INSERT INTO consultas (id_medico, id_paciente, data_consulta, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
      [id_medico, id_paciente, data_consulta, desc]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putConsulta = async (req, res) => {
  const { id } = req.params;
  const { id_medico, id_paciente, data_consulta, descricao } = req.body;
  try {
    const result = await pool.query(
      'UPDATE consultas SET id_medico = $1, id_paciente = $2, data_consulta = $3, descricao = $4 WHERE id_consulta = $5 RETURNING *',
      [id_medico, id_paciente, data_consulta, descricao, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteConsulta = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM consultas WHERE id_consulta = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Relacionamento usuario Pacientes
export const getPacientes = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT p.*, u.nome, u.email, u.nivel
       FROM paciente p
       JOIN usuario u ON p.id_usuario = u.id_usuario`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postPaciente = async (req, res) => {
  const { id_usuario } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO paciente (id_usuario) VALUES ($1) RETURNING *',
      [id_usuario]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM paciente WHERE id_paciente = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// relacionamento Usuario Atendentes
export const getAtendentes = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT a.*, u.nome, u.email, u.nivel
       FROM atendente a
       JOIN usuario u ON a.id_usuario = u.id_usuario`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postAtendente = async (req, res) => {
  const { id_usuario } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO atendente (id_usuario) VALUES ($1) RETURNING *',
      [id_usuario]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAtendente = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM atendente WHERE id_atendente = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};