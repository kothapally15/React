import React from "react";

function MapFilter (){
    const arr= [10,20,40,90,80,34,54]
    const filtered= arr.filter(item=>item<40)

    return(
       <div>
        {
        filtered.map(item=><li key={item.index}>{item}</li>)
}
       </div>
    )

}
export default MapFilter
