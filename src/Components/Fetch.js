import React ,{useEffect,useState} from "react";
function Fetch(){
    const [data,setData]=useState([])
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos').then(Response=>Response.json()).then(json=>setData(json))},[])

    return(
        <p>
            Hello World
            {data.map(item=><li key={item.id}> {item.title}

            </li>)}
        </p>
    )
}
export default Fetch