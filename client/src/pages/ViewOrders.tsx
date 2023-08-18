import { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavigationMenu from "../components/NavigationMenu";


const ViewOrders = () => {

    // let navigate = useNavigate();
    // const [quote, setQuote] = useState('')

    // async function populateQuote() {
    //     const request = await fetch('http://localhost:1337/api/testget', {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //           },
    //     })

    //     const data = request.json();
    //     if(data.status === 'ok'){
    //         setQuote(data.quote);
    //     } else {
    //         alert(data.error)
    //     }
    //     console.log(data);
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         const user = jwt_decode(token);
    //         if (!user) {
    //             localStorage.removeItem('token');
    //             navigate('/login', { replace: true });
    //         } else {
    //             populateQuote();
    //         }
    //     }
    // })

    // return <h1>Your quote: {quote || 'No Quote Found'}</h1>

    const applicants = [ {
        name: 'Joe', work: 'freelance-developer', 
        blogs: '54', websites: '32', 
        hackathons: 'none', location: 'Morocco', id: '0',
          
      },
       {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',
          
      },
      
      ];

    const [orderList, setOrderList] = useState(applicants);

    let marktest: any = [];

    // async function populateQuote() {
    //     const request = await fetch('http://localhost:1337/api/getorders', {
    //         // headers: {
    //         //     Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         //   },
    //     })

    //     const data: any = request.json();
    //     if(data){
    //         console.log(data);
    //     } else {
    //         console.log("Error fetching orders.");
    //     }
    //     // console.log(data);
    //     marktest = data.allOrders;
    // }

    async function populateQuote() {
        const request = await fetch('http://localhost:1337/api/getorders')

        const data: any = request.json();
        if(data){
            console.log(data);
            setOrderList(data);
        } else {
            console.log("Error fetching orders.");
        }
        // console.log(data);
        marktest = data;
    }

    // useEffect(() => {
    //     populateQuote();
    // }, []);



    async function sendUserAlert (){
        console.log(orderList);

    }


    return (
        <>
            <NavigationMenu />
            <h1>View Orders page under construction</h1>

            {orderList.map(function(data) {
                return (
                    <div>
                    Applicant name:  {data.name}
                    </div>
                )
                })}


            <Button variant="success" onClick={populateQuote}>Success</Button>{' '}
            <Button variant="warning" onClick={sendUserAlert}>tea</Button>{' '}
            <br />
            <br />
            <Link to={`/`}>Home</Link>
        </>
    )
}

export default ViewOrders;