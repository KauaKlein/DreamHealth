export async function buscarConsultas() {
    const response = await fetch('http://localhost:3000/consultas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao buscar consultas');
    }
  
    return response.json();
  }