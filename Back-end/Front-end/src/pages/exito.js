import { useHistory } from 'react-router-dom';

const CreateKnife = () => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ... Lógica para crear el cuchillo ...

      // Redirigir a la página de éxito
      history.push('/exito');
    } catch (error) {
      console.error("Error al enviar la solicitud", error.message);
    }
  };

  // Resto del componente...
};
