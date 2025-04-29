import React, {Component} from "react";

class ClickClass extends Component{
    clickHandler(){
        console.log("button is clicked in class")
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }

}

export default ClickClass