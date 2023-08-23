import NavigationMenu from "../components/NavigationMenu";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlaceOrderModal from '../components/PlaceOrderModal';

function PlaceOrder() {

  const itemOptions = [
    { item: "Pickles", type: "Hot", imageLocation: "/images/hot_01.jpeg" },
    { item: "Pickles", type: "Bread and Butter", imageLocation: "/images/bread_and_butter_01.jpeg" },
    { item: "Pickles", type: "Kosher Dill", imageLocation: "/images/kosher_dill_01.jpeg" },
  ]
  return (
    <>
      <NavigationMenu />

      <div>
        <h1>Pickles</h1>

        <Row xs={1} md={4} className="g-4 justify-content-md-center">
          {itemOptions.map(function (itemChoice, index) {
            return (
              <Col key={index}>
                <Card>
                  <Card.Img variant="top" src={itemChoice.imageLocation} />
                  <Card.Body>
                    <Card.Title>{itemChoice.type}</Card.Title>
                    <Card.Text>
                      <PlaceOrderModal itemChoice={itemChoice} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default PlaceOrder;
