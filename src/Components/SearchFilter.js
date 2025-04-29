import React, { useEffect, useState } from "react";
function SearchFilter(){
    const [search,setSearch]= useState('')
    const [data,setData]=useState([])
        useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos').then(Response=>Response.json()).then(json=>setData(json))},[])
    
    return(
        <div>
            <center>
            <h4>Enter you City:</h4>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <br/>
            {data.filter(item=>item.title.includes(search)).map(item=><li key={item.id}> {item.title}</li>)}
            {/* {data.map(item=><li key={item.id}> {item.title}</li>)} */}

            </center>
        </div>
    )
}
export default SearchFilter