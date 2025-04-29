import React from "react";
//function Greet(){
 //   return <h1> Welcome Sharan</h1>
//}
/*const Greet = (props) => {
    console.log(props)
    return ( <div> 
                <h1>I Love {props.names} which are in {props.username} and {props.taste} in taste </h1>
                {props.children}
            </div>


    )
}


const Greet = ({names,username,taste}) => {
    return <h1>I love {names} which are in {username} and {taste} in</h1>
}

*/
const Greet = props => {
    const {names,username,taste} = props
    return <h1>I love {names} which are in {username} and {taste} in taste</h1>
}


export default Greet