import React, { Component } from "react";
import ChildComponents from "./ChildComponents";
class ParentComponents extends Component{

    constructor(props){
        super(props)
        this.state={
            parentName:"Parent"
        }
    }

    greetParent(ChildName){
        console.log('Greet Parent')
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }

    render(){
        return (
            <div>
                <ChildComponents greetHandler={(x) => {
                    this.greetParent(x)}}/>
            </div>
        )

    }
}

export default ParentComponents