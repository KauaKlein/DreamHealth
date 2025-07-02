export async function buscarUsuarios(nivel) {
    const response = await fetch(`http://localhost:3000/${nivel}`, {
      method: 'GET',
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao buscar Usuarios');
    }
  
    return response.json();
  }