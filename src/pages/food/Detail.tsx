
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { theme } from '../../constants/theme';
import Burger from '../../assets/images/burger.png'

const Edit = () => {
  return (
    <Container className="mt-4">
      <Row>
        {/* Left Column - Image and Thumbnails */}
        <Col md={5}>
          <Card className="p-3">
            <Card.Img
              variant="top"
              src={Burger}
              alt="Product Image"
              className="mb-3"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          
           
          </Card>
        </Col>

        {/* Right Column - Product Details */}
        <Col md={7}>
          <Card className="p-3">
            <Card.Body>
              <Card.Subtitle className="text-warning mb-2">Food</Card.Subtitle>
              <Card.Title className="mb-3">Baklava</Card.Title>
              
              {/* Ratings Section */}
              <div className="mb-3">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-muted ms-2">(485 Customer Reviews)</span>
              </div>

              <Card.Text>
                <strong>Stock:</strong> 15kg
              </Card.Text>

              <Card.Text>
                <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
              </Card.Text>

              <Card.Text>
                <strong>Price:</strong> $120
              </Card.Text>

              {/* Edit and Delete Buttons */}
              <Button style={{padding:"5px 10px",backgroundColor:theme.colors.whiteSmoke, border:"none", color:theme.colors.orangeYellow}} variant="warning" className="me-2">
                Edit Detail
              </Button>
              <Button style={{backgroundColor:theme.colors.lightPink, border:"none", color:theme.colors.terraCotta,fontWeight:"bold",padding:"5px 10px"}}>Delete Detail</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
