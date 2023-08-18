import { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavigationMenu from "../components/NavigationMenu";


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
