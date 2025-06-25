-- Tabela base para todos os usuários
CREATE TABLE usuario (
	id_usuario serial PRIMARY KEY,
	nome varchar(50) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
	senha char(60) NOT NULL,
	nivel varchar(20) NOT NULL -- Ex: 'paciente', 'atendente', 'medico'
);

-- Tabela genérica de endereços
CREATE TABLE endereco (
	id_endereco serial PRIMARY KEY,
	cidade varchar(50) NOT NULL,
	bairro varchar(50) NOT NULL,
	rua varchar(100) NOT NULL,
	numero varchar(10) NOT NULL
);

-- Relacionamento entre usuários e endereços
CREATE TABLE usuario_endereco (
	id_usuario int NOT NULL,
	id_endereco int NOT NULL,
	PRIMARY KEY (id_usuario, id_endereco),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE,
	FOREIGN KEY (id_endereco) REFERENCES endereco(id_endereco) ON DELETE CASCADE
);

-- Paciente herda de usuário
CREATE TABLE paciente (
	id_paciente serial PRIMARY KEY,
	id_usuario int NOT NULL UNIQUE,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

-- Atendente herda de usuário
CREATE TABLE atendente (
	id_atendente serial PRIMARY KEY,
	id_usuario int NOT NULL UNIQUE,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

-- Médico herda de usuário
CREATE TABLE medico (
	id_medico serial PRIMARY KEY,
	id_usuario int NOT NULL UNIQUE,
	area varchar(60) NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

-- Consultas entre médicos e pacientes
CREATE TABLE consultas (
	id_consulta serial PRIMARY KEY,
	data_consulta TIMESTAMP NOT NULL,
	descricao varchar(100),
	id_medico int NOT NULL,
	id_paciente int NOT NULL,
	FOREIGN KEY (id_medico) REFERENCES medico(id_medico) ON DELETE CASCADE,
	FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente) ON DELETE CASCADE
);