import React from "react";

const Hello = () => {
   {/* return(
        <div> 
            <h1>Hellow Everyone</h1>
        </div>

    ) */}
     return React.createElement('div', null, React.createElement('h1', null, <h1>Hello createElement</h1>))
}
export default Hello