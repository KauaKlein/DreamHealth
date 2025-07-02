import express from 'express';
import {
  getUsuarios, postUsuario, putUsuario, deleteUsuario,
  getEnderecos, postEndereco, putEndereco, deleteEndereco, postUsuarioEndereco,
  getMedicos, postMedico, putMedico, deleteMedico,
  getConsultas, postConsulta, putConsulta, deleteConsulta,
  getPacientes, postPaciente, deletePaciente,
  getAtendentes, postAtendente, deleteAtendente
} from '../controllers/crud.js';

const app = express();
const port = 3000;

app.use(express.json());

// Usuários
app.get('/usuarios', getUsuarios);
app.post('/usuarios', postUsuario);
app.put('/usuarios/:id', putUsuario);
app.delete('/usuarios/:id', deleteUsuario);

// Endereços
app.get('/enderecos', getEnderecos);
app.post('/enderecos', postEndereco);
app.put('/enderecos/:id', putEndereco);
app.delete('/enderecos/:id', deleteEndereco);

// Relacionamento usuário-endereço
app.post('/usuario_endereco', postUsuarioEndereco);

// Médicos
app.get('/medicos', getMedicos);
app.post('/medicos', postMedico);
app.put('/medicos/:id', putMedico);
app.delete('/medicos/:id', deleteMedico);

// Consultas
app.get('/consultas', getConsultas);
app.post('/consultas', postConsulta);
app.put('/consultas/:id', putConsulta);
app.delete('/consultas/:id', deleteConsulta);

// Pacientes
app.get('/pacientes', getPacientes);
app.post('/pacientes', postPaciente);
app.delete('/pacientes/:id', deletePaciente);

// Atendentes
app.get('/atendentes', getAtendentes);
app.post('/atendentes', postAtendente);
app.delete('/atendentes/:id', deleteAtendente);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 