import React ,{useEffect,useState} from "react";
import axios from 'axios';
import { UserContext } from "../App";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Axios(){
    const [data,setData]=useState([])
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/todos/').then(Response=>setData(Response.data))},[])

    return(
        <p>
            Hello World
            <UserContext.Consumer>
                {value =><div>{value}</div>}
            </UserContext.Consumer>
            {/* {data.map(item=><li key={item.id}> <Nav.Link href='{/task/${item.id}}'>{item.id}</Nav.Link> */}
                {data.map(item=><li key={item.id}> <Link to={`/task/${item.id}`}>{item.id}</Link>


            </li>)}
        </p>
    )
}
export default Axios