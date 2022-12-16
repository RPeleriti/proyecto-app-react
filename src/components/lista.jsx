import  { useState,useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/esm/Container';

    
function Lista() {

    const [reservas, setReservas] = useState([])

    const Listas = async () => {
        const { data } = await axios.get('https://backproyectoutn-production.up.railway.app/reservas')
        setReservas(data.reservas)
    }

    useEffect(() => {
        Listas()
    }, [])   

    const handleSubmit = async (e) => {
        alert('¡Reserva confirmada!')
    };     

    const handleDelete = (id)=> {

        Swal.fire({
            title: '¿Desea eliminar la reserva?',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('https://backproyectoutn-production.up.railway.app/reservas/' + id);
                Swal.fire('Eliminado', '', 'success');
                Listas();
            } })
    }
  

    return(
        <Container>
        <div>
             <Table className='Grilla' striped bordered hover variant="dark" >
                <thead responsive="sm">
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Experiencia</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    
                {reservas && reservas.map((reserva, i) => (
                    <tr key={i}>
                        <td>{reserva.nombre}</td>
                        <td>{reserva.cantidad}</td>
                        <td>{reserva.experiencias}</td>
                        <td className='BotAccion'>                               
                            <Button variant="primary" type="submit"onClick={handleSubmit} >Confirmar</Button>
                            <Button variant="primary" type="submit" onClick={() => handleDelete(reserva._id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
        </Container>  
    )  
 }

export default Lista;