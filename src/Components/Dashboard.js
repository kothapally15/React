import React from "react";
import {useNavigate, useParams } from "react-router-dom";
function Dashboard(){
    let history=useNavigate()
    let name =useParams()
    return (
        <div>
        <h1>Welcome to {name.name} Dashboard Page</h1>
        <button onClick={()=>history('/about')}>Login</button>
       </div>
    )
}
export default Dashboard