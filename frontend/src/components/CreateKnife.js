import { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    
    setSuccessMessage("El cuchillo se creó con éxito.");

      setTimeout(() => {
        router.push('/SuccessPage');
      }, 1500);

    } catch (error) {
      console.error("Error al enviar la solicitud", error.message);
      setErrorMessage(error.response?.data?.error || "Error al enviar la solicitud. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
     <div>
      <Form className="form-container" onSubmit={handleSubmit}>
        <h1>Crear Cuchillo</h1>
        <Row className="mb-4">
          <Col>
            <Form.Control
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Codigo"
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="Modelo"
            />
          </Col>
        </Row>
        <Form.Group className="mb-4" controlId="formPrecio">
          <Form.Control
            type="text"
            placeholder="Precio 1234 $"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-4">
          <Col>
            <Form.Control
              type="text"
              placeholder="Largo Total del Cuchillo (Valor)"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select
              value={unidad}
              onChange={(e) => setUnidad(e.target.value)}>
              <option value="" disabled>Select unidad</option>
              <option value="pulgadas">pulgadas</option>
              <option value="cm">cm</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-4" controlId="formDescripcion">
          <Form.Control
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripcion General"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formMaterial">
          <Form.Control
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="Material de la Hoja"
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
        <Button variant="dark" type="submit" size="lg" className="button-create">
          Enviar
        </Button>
      </Form>
    </div>
    </>
  );
}

export default CreateKnife;
