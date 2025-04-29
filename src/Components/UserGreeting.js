import React,{Component} from "react";

class UserGreeting extends Component{
    constructor(props){
        super()
        this.state={
            islogged:true
        }
    }

    render(){
        let message
        if (this.state.islogged) {
            message= <h1>Welcome Sharan, you are logged in</h1>
            
        } else {
           message=<h1>Welcome User, please Log in</h1>
        }
        return <div>{message}</div>


    }
    
    /*    if (this.state.islogged) {
        return <h1>Welcome Sharan, you are logged in</h1>
        
    } else {
        return <h1>Welcome User, please Log in</h1>
    }
}
    render (){
        return <h1>User UserGreeting</h1>
        
    }*/

}
export default UserGreeting