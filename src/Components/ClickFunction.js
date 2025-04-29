import React from "react";

export  function ClickFunction(){

    function clickHandler(){
        console.log("Button Is Clicked")
    }
    return(
        <div>
            <button onClick={clickHandler}>
                Press
            </button>
        </div>
    )

}

export default ClickFunction