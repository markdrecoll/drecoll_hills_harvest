import { Link } from "react-router-dom";

function App() {

    return (
        <div>
            <h1>This is the home page.</h1>
            <br />
            <Link to={`/register`}>Register</Link>
            <br />
            <Link to={`/login`}>Login</Link>
        </div>
    )
}
  
  export default App