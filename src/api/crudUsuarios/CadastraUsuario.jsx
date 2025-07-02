export async function cadastrarUsuario(dados) {
  const response = await fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao cadastrar usuário');
  }

  return response.json();
}