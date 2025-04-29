import React from "react";
function ChildComponents(props){

    const greetchild=(x)=>{
        
        alert(`Hello from child ${x}`)
    }
    return (
        <div>
             <button onClick={()=>{props.greetHandler('child')}}> Greet </button> 
            {/* <button onClick={props.greetHandler('child')}> Greet </button>  */}
            {/* <button onClick={greetchild(98)}> Greet </button>  */}
            {/* {greetchild(98)} */}
        </div>
    )
}
export default ChildComponents