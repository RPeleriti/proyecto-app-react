
import Container from 'react-bootstrap/esm/Container';
import logo from'../logo/face.svg';
import logow from '../logo/whatsapp.svg'
import logoi from '../logo/instagram.svg';


function Footer() {
  return (
    <Container >
      
    
        <div className='Logos'>
        <a href="tel:+541164970590">
        <img src={logow} alt="logo" />
        </a>
        <a href='https://www.facebook.com/florencesanisidro/'>
        <img src={logo}alt="logo" /> 
        </a>
        <a href="https://www.instagram.com/florencesanisidro/">
        <img src={logoi}alt="logo"/>
        </a>
        </div>
    </Container>
    
  );
}

export default Footer;