import React,{Component} from "react";

class Message extends Component{

    constructor(){
        super() 
        this.state = {
            message:'Message Class constructor welcomes you'
            }       
    }

    changeMessage(){
    
        this.setState({
            message: "Thanks for clicking Press Button"
        })
    }

    render (){
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Press</button>
        </div>
        )
    }

}
export default Message