import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <h1 style={{textAlign:"center", boxShadow:"5px 10px #3e43d6", textShadow:"2px 2px #afafba"}}>LIBRARY MANAGEMENT SYSTEM</h1>
                            <div style={{marginTop:"100px", marginLeft:"35%", width:"30%", padding: "70px", backgroundColor:"#bedbfa", borderRadius:"20px"}}>
                            <Link className="m-3 mx-1 btn btn-primary" to="/store">Store</Link>
                            <Link  className="m-3 mx-1 btn btn-warning" to="/rental">Rentals</Link>
                            <Link  className="m-3 mx-1 btn btn-danger" to="/available">Available</Link>
                            </div>
                            
        </>
    )
}

export default Home;
