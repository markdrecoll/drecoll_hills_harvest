import { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavigationMenu from "../components/NavigationMenu";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


function PlaceOrder() {
  //   let navigate = useNavigate();

  const [item, setItem] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');

  async function placeOrder(event: any) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/placeorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        item,
        type,
        quantity,
      })
    })

    const data = await response.json();

    // if(data.status === 'ok') {
    //   navigate('/vieworders')
    // }

    console.log(data);
  }

  return (
    <>
      <NavigationMenu />

      <div>
        <h1>PlaceOrder</h1>

        <Row xs={1} md={4} className="g-4 justify-content-md-center">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="/hot_01.jpeg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>





        <br />
        <br />
        <br />
        <br />
        <form onSubmit={placeOrder}>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="Item"
          />
          <br />
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Type"
          />
          <br />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="Quantity"
          />
          <br />
          <Button as="input" type="submit" value="Place Order" />{' '}
        </form>
      </div>
      <br />
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default PlaceOrder;
