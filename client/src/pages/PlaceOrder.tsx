import NavigationMenu from "../components/NavigationMenu";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlaceOrderModal from '../components/PlaceOrderModal';

function PlaceOrder() {
  return (
    <>
      <NavigationMenu />

      <div>
        <h1>Pickles</h1>

        <Row xs={1} md={4} className="g-4 justify-content-md-center">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="/hot_01.jpeg" />
                <Card.Body>
                  <Card.Title>Bread and Butter</Card.Title>
                  <Card.Text>
                    <PlaceOrderModal />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default PlaceOrder;
