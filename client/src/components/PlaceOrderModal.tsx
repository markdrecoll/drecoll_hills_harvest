import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PlaceOrderModal(props: any) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const item = props.itemChoice.item;
    const type = props.itemChoice.type;
    const [size, setSize] = useState('Pint');
    const [quantity, setQuantity] = useState(1);

    async function placeOrder(event: any) {
        event.preventDefault();

        // if(quantity is not an integer or is less than 1){
        //     alert("Quantity must be a number greater than zero.");
        // }

        const response = await fetch('http://localhost:1337/api/placeorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item,
                type,
                size,
                quantity,
            })
        })

        const data = await response.json();
        if (data) {
            console.log(data);
        } else {
            console.log("An error has occured placing order.");
        }

        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Place Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.itemChoice.type} {props.itemChoice.item}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={placeOrder}>
                        <label className="p-3">
                            Size:
                        </label>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="Size">
                            <option key={0} value={"Pint"}>Pint</option>
                            <option key={1} value={"Quart"}>Quart</option>
                        </select>
                        <label className="p-3">
                            Quantity:
                        </label>
                        <input
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            type="number"
                            placeholder="Quantity"
                            min={1}
                            max={20}
                        />
                        <br />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={placeOrder}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PlaceOrderModal;