import { Link } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";

function App() {

    return (
        <div>
            <NavigationMenu />
            <h1>This is the home page.</h1>
            <br />
            <Link to={`/register`}>Register</Link>
            <br />
            <Link to={`/login`}>Login</Link>
            <br />
            <Link to={`/placeorder`}>Place Order</Link>
            <br />
            <Link to={`/vieworders`}>View Orders</Link>
        </div>
    )
}
  
  export default App