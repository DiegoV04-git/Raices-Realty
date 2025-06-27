export const fetchProperties = async () => {
    try {
        const reponse = await fetch('http://localhost:5001/propiedades');
        if(!reponse.ok){
            throw new Error('Error al obtener las propiedades');
        }
        return await reponse.json();
    } catch (error) {
        console.error(error);
        return []; // Devuelve un array vacío en caso de error
    }
};

