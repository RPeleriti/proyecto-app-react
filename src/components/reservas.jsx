import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Reservas() {

    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        mail: "",
        experiencias: "",
        cantidad: 0
    });


    const [listas, setListas] = useState([]) 

    const [validated, setValidated] = useState(false);

/*     const config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    } */


    const Listas = async () => {
    const { data } = await axios.get('https://backproyectoutn-production.up.railway.app/gastronomia') 
/*         const { data } = await axios.get('http://localhost:9000/gastronomia') */
        console.log(data)
        setListas(data.listas)
    }

    useEffect(() => {
        Listas()
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            alert('¡Estamos grabando datos!')

            setValidated(true);

            axios.post("https://backproyectoutn-production.up.railway.app/reservas", inputs) 
/*             axios.post("http://localhost:9000/reservas", inputs, config) */
            setInputs({
                nombre: "",
                apellido: "",
                mail: "",
                experiencias: "",
                cantidad: 0
            })

        }

    };

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
                        <Form.Control required type="text" placeholder="Apellido" defaultValue="" name='apellido' onChange={handleChange} />
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
                    <Col>
                        <Form.Label className="">Experiencias</Form.Label>
                         <Form.Select name="experiencias" aria-label="Default select example" onChange={handleChange}>
                            <option>Seleccione una..</option>
                            {listas && listas.map((lista, i) => (
                                <option key={i} value={lista.Nombre}>{lista.Nombre}</option>
                            ))} 
                            
                        </Form.Select> 
                    </Col>
                    <Col>
                        <Form.Label className="">Cantidad</Form.Label>
                        <Form.Control type="Number" placeholder="Cantidad" aria-describedby="inputGroupPrepend" required name="cantidad" onChange={handleChange} />
                    </Col>
                </Row>

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
}

export default Reservas;

