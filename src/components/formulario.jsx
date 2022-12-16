import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Formulario() {
  const [validated, setValidated] = useState(false);

  const config = {
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    }
}

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      
      alert('¡Estamos grabando datos!')
      
      setValidated(true);  

      axios.post("backproyectoutn-production.up.railway.app/Contact", inputs, config)
      setInputs({
        nombre: "",
        apellido:"",
        mail:"",
        ciudad:"",
        provincia:"",
        codpostal:"",
        mensaje:""
      })

    }    
    
  };

const [inputs, setInputs] = useState({
    nombre: "",
    apellido:"",
    mail:"",
    ciudad:"",
    provincia:"",
    codpostal:"",
    mensaje:""
});


const handleChange = (e) => {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
};

  return (
    <Container>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" >
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue=""
            name='nombre'
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            defaultValue=""
            name='apellido'
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Mail</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Mail Address"
              aria-describedby="inputGroupPrepend"
              required
              name="mail"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" name='ciudad'onChange={handleChange} placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" name="provincia" placeholder="Provincia" required onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Cod.Postal</Form.Label>
          <Form.Control type="text" name="codpostal" placeholder="Zip" required onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Form.Group className="mb-3" md="12" controlId="validationCustom05">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" name="mensaje"onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Acepto terminos y condiciones"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  </Container>
  );
}

export default Formulario;

