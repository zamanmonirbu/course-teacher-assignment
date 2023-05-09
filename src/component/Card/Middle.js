import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Middle(props) {
    const {Fee,image,course,Teacher}=props.user;


  return (
   <div >
    
     <Card  style={{ width: '22rem',textAlign:'center',marginLeft:'40%'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title  text="green">Course:{course}</Card.Title>
        {/* <Card.Text>
          {about}
        </Card.Text> */}
        <Card.Title>Fees:{Fee}</Card.Title>
        <Card.Title > <Link to={`/instructor/${Teacher}`}>Instructor:{Teacher}</Link> </Card.Title>

        <Button variant="primary">Enroll Now</Button>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Middle;