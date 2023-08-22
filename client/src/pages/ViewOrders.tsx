import { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NavigationMenu from "../components/NavigationMenu";


const ViewOrders = () => {

    // let navigate = useNavigate();
    // const [quote, setQuote] = useState('')

    // async function populateAllOrders() {
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
    //             populateAllOrders();
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

    const [orderList, setOrderList] = useState([]);

    let testvar01: any = [];

    async function populateAllOrders() {
        const request = await fetch('http://localhost:1337/api/getorders', {
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('token')}`,
            //   },
        })

        const data: any = await request.json();
        if(data){
            console.log(data.allOrders);
        } else {
            console.log("Error fetching orders.");
        }
        // console.log(data);
        setOrderList(data.allOrders)
    }

    // async function populateAllOrders() {
    //     const request = await fetch('http://localhost:1337/api/getorders')

    //     const data: any = request.json();
    //     if(data){
    //         console.log(data);
    //         // setOrderList(data);
    //     } else {
    //         console.log("Error fetching orders.");
    //     }
    //     // console.log(data);
    //     testvar01 = data;
    // }

    // useEffect(() => {
    //     populateAllOrders();
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
                    Item:  {data.item}
                    </div>
                )
                })}


            <Button variant="success" onClick={populateAllOrders}>Success</Button>{' '}
            <Button variant="warning" onClick={sendUserAlert}>tea</Button>{' '}
            <br />
            <br />
            <Link to={`/`}>Home</Link>
        </>
    )
}

export default ViewOrders;