import NavigationMenu from "./components/NavigationMenu";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
    return (
        <div>
            <NavigationMenu />

            <Row className="justify-content-md-center">
                <Col md={6}>
                <h1>Drecoll Hills Harvest</h1>
                <br />
                    <img
                        alt=""
                        src="/images/mikelogosmall.png"
                        className="d-inline-block align-top"
                    />{' '}
                </Col>
            </Row>
        </div>
    )
}

export default App