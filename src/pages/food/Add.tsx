import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { theme } from "../../constants/theme";

const ProductForm = () => {
  return (
    <Container>
      <Form>
        <Row className="d-flex flex-column flex-xl-row">
          <Col xl={6} className="mb-3">
            <Card>
              <Card.Body>
                <Form.Group controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product Name" />
                </Form.Group>

                <Form.Group controlId="description" className="mt-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="It's contains blah blah things"
                  />
                </Form.Group>

                <Form.Group controlId="category" className="mt-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Category" />
                </Form.Group>

                <Form.Group controlId="price" className="mt-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Price" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} className="mb-3">
            <Card>
              <Card.Body>
                <Form.Group controlId="quantity">
                  <Form.Label>Qty</Form.Label>
                  <Form.Control type="number" placeholder="Enter quantity" />
                </Form.Group>

                <Form.Group controlId="categoryRight" className="mt-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Category" />
                </Form.Group>

                <Form.Group controlId="fileUpload" className="mt-3">
                  <Form.Label>
                    Please upload any file to see a preview
                  </Form.Label>
                  <Form.Control type="file" />
                  <Form.Text className="text-muted">
                    * Recommended resolution is 640*640 with file size.
                  </Form.Text>
                </Form.Group>

                <div className="mt-3">
                  <Button style={{backgroundColor:"transparent", color:"black"}} className="me-2">
                    Cancel
                  </Button>
                  <Button style={{backgroundColor:theme.colors.orangeYellow,border:"none"}}>Add Product</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProductForm;
