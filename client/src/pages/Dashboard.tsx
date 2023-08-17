import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let navigate = useNavigate();
    const [quote, setQuote] = useState('')

    async function populateQuote() {
        const request = await fetch('http://localhost:1337/api/testget', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })

        const data = request.json();
        // if(data.status === 'ok'){
        //     setQuote(data.quote);
        // } else {
        //     alert(data.error)
        // }
        console.log(data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt_decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login', { replace: true });
            } else {
                populateQuote();
            }
        }
    })

    return <h1>Your quote: {quote || 'No Quote Found'}</h1>

}

export default Dashboard;