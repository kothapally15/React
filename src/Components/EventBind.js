import React, {Component} from "react";

class EventBind extends Component{


    constructor(props){
        super(props) 
        this.state = {
            message:'EventBinding Class constructor welcomes you'
            }       
   // this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message: "Thanks for clicking Event Press Button"
        })
        console.log("button is clicked in Event class")
    }

  /*  clickHandler=()=> {
        this.setState({
            message: "Thanks for clicking Event Press Button"
        }) 
    }*/
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }

}

export default EventBind