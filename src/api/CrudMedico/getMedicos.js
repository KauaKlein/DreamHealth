export async function buscarUsuarios() {
    const responseMedico = await fetch(`http://localhost:3000/medicos`, {
      method: 'GET',
    });
  
    if (!responseMedico.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao buscar Usuarios');
    }
    const responseUsuario = await fetch(`http://localhost:3000/usuarios`, {
      method: 'GET',
    });
  
    if (!responseUsuario.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao buscar Usuarios');
    }
  
    return response.json();
  }