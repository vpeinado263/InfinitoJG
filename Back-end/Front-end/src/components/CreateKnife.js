import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Row, Col, Form, Button } from 'react-bootstrap';


const CreateKnife = () => {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");
  const [valor, setValor] = useState("");
  const [unidad, setUnidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [material, setMaterial] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
    };
  fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Valores a enviar:", codigo, nombre, modelo, precio, valor, unidad, descripcion, material);

   try {
    if (!codigo || !nombre || !modelo || !precio || !valor || !unidad || !descripcion || !material) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }
    
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/knives/crear`, {
     codigo,
     nombre,
     modelo,
     precio,
     medidas: {
      valor,
      unidad,
      },
     descripcion,
     material,
    });

    console.log(response.data);
      setSuccessMessage("El cuchillo se creó con éxito.");

      setTimeout(() => {
        router.push('/SuccessPage');
      }, 3000);

    } catch (error) {
      console.error("Error al enviar la solicitud", error.message);
      setErrorMessage(error.response?.data?.error || "Error al enviar la solicitud. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
     <div>
    
     <Form className="from" onSubmit={handleSubmit}>
     <h1>Crear Cuchillo</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formCodigo">
          <Form.Label>Codigo</Form.Label>
          <Form.Control
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formModelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
        type="text"
        placeholder="1234 $"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formValor">
          <Form.Label>Largo Total del Cuchillo (Valor)</Form.Label>
          <Form.Control
          type="text"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formUnidad">
            <Form.Label>Medidas (Unidad)</Form.Label>
            <Form.Select
             value={unidad}
             onChange={(e) => setUnidad(e.target.value)} >
             <option value="" disabled>Select unidad</option>
             <option value="pulgadas">pulgadas</option>
             <option value="cm">cm</option>
            </Form.Select>
        </Form.Group>  
      </Row>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMaterial">
          <Form.Label>Material de la Hoja</Form.Label>
          <Form.Control
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </Form.Group>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <Button variant="dark" type="submit" size="lg">
          Enviar
        </Button>
     </Form>
    </div>
    </>
  );
}

export default CreateKnife;
