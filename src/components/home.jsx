import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://fotos.perfil.com/2017/01/01/cropped/696/522/center/Il-Novo-Deck-Noche.jpg" />
        <Card.Body>
          <Card.Title>Gastronomia Nocturna</Card.Title>
          <Card.Text>
          El jazz y la gastronomía se unieron para deleitar los oidos y paladares más exigentes. Todos los viernes, propone un maridaje perfecto, compuesto por el agradable sonido de la música en vivo y una oferta gastronómica mediterránea de primer nivel. Ideal para una cena especial o para compartir un momento diferente con amigos, familia o pareja, las Noches de Jazz invitan a disfrutar del arte culinario, el ocio y la cultura en su máximo esplendor.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEjmh682sjP5u1aEq4oatOmmw7jyMPnJY7d7qAM6v-w&s" />
        <Card.Body>
          <Card.Title>Paseo Catamaran</Card.Title>
          <Card.Text>
          Audio guiado satelital en 3 idiomas (español, ingles y portugues)
          Ambiente climatizado (aire acondicionado y calefacción)
          Servicio de bar y cafetería a bordo
          Sanitario
Dos cubiertas (salón interno y terraza externa)
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/16/75/e5/61/le-gite-sulla-barca-corto.jpg" />
        <Card.Body>
          <Card.Title>Almuerzos a bordo</Card.Title>
          <Card.Text>
          Buscamos la excelencia en la gestión de nuestros procesos y en el servicio que brindamos. Nuestra meta es superar los estándares de calidad y las expectativas de nuestros visitantes.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default Home;