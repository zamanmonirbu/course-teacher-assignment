import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Middle(props) {
    const {Fee,image,course,Teacher,about}=props.user;
  return (
   <div >
     <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title  text="green">{course}</Card.Title>
        <Card.Text>
          {about}
        </Card.Text>
        <Card.Title>{Fee}</Card.Title>
        <Card.Title>{Teacher}</Card.Title>

        <Button variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Middle;