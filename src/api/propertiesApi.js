export const fetchProperties = async () => {
    try {
      const response = await fetch('/propiedades.json');
      if (!response.ok) throw new Error('Error al obtener las propiedades');
      const data = await response.json();
      // Si tu JSON original era { "propiedades": [...] }, devuelve:
      return data.propiedades;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  