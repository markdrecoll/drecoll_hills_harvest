import { useEffect, useState } from 'react'
import NavigationMenu from "../components/NavigationMenu";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ViewOrders = () => {

    const [orderList, setOrderList] = useState([]);

    async function populateAllOrders() {
        const response = await fetch('http://localhost:1337/api/getorders', {
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('token')}`,
            //   },
        })

        const data: any = await response.json();
        if (data) {
            setOrderList(data.allOrders);
            console.log(data.allOrders);
        } else {
            console.log("Error fetching orders.");
        }
    }

    useEffect(() => {
        populateAllOrders();
    }, []);

    return (
        <>
            <NavigationMenu />
            <div className="justify-content-md-center">
                <h1>View Orders page under construction</h1>
            </div>

            <Row xs={1} md={4} className="g-4 justify-content-md-center">
                {orderList.map(function (order, index) {

                    return (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src="/hot_01.jpeg" />
                                <Card.Body>
                                    <Card.Title>{order.item}</Card.Title>
                                    <Card.Text>
                                        <li>
                                            {order.type}
                                        </li>
                                        <li>
                                            {order.size}
                                        </li>
                                        <li>
                                            {order.quantity}
                                        </li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </>
    )
}

export default ViewOrders;