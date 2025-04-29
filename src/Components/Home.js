import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Navigate} from "react-router-dom";
function Home(){
    const [loading, setLoading] = useState(true);
    const [x, setX] = useState("please wait...")
    const [auth,setAuth]=useState(false)
    
    // var loading = true;
    useEffect(()=>{
        setTimeout(()=> {
            // loading = false ;
            setLoading(false);
            console.log("loading", loading);
        }, 3000);
    }, []);

    useEffect(()=>{
        // setTimeout(()=> {
        //     // loading = false ;
        //     setLoading(false);
        //     console.log("loading", loading);
        // }, 3000);
        if(!loading)
            setX("these are the products")
    }, [loading]);

    if (auth){
        return <Navigate to='/dashboard'/>
    }

    return (
        <div>
            <h2>Home Page</h2>
        <Button variant="primary" onClick={()=> { alert('hello')}}>Click Me</Button>
        <br/>
        <Button onClick={()=>{setAuth(true)}}>Login </Button>
        {loading && <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
            <p>Loading: {loading ? 'yes' : 'no'}</p>
            <p> {x}</p>
        </div>
    )
}
export default Home