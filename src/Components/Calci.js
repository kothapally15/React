import React,{useState} from "react";

function Calci(){
    const [input, setInput] = useState("")
    const [result,setResult]=useState(0)
    const handler =e=>{
        setInput(e.target.value)
    }

    return(
        <div>
            <center>
                <input type="text" name="input" value={input}
                onChange={handler} placeholder="Input" />
                <br/>
                <button onClick={()=>{setResult(eval(input))}}>Result</button>
                <br/>
                <h4>Result is :{result}</h4>
                <button onClick={()=>{setInput(input+"1")}}>1</button>
                <button onClick={()=>{setInput(input+"2")}}>2</button>
                <button onClick={()=>{setInput(input+"3")}}>3</button>
                <button onClick={()=>{setInput(input+"4")}}>4</button><br/>
                <button onClick={()=>{setInput(input+"5")}}>5</button>
                <button onClick={()=>{setInput(input+"6")}}>6</button>
                <button onClick={()=>{setInput(input+"7")}}>7</button>
                <button onClick={()=>{setInput(input+"8")}}>8</button><br/>
                <button onClick={()=>{setInput(input+"9")}}>9</button>
                <button onClick={()=>{setInput(input+"0")}}>0</button>
                <button onClick={()=>{setInput(input+"+")}}>+</button>
                <button onClick={()=>{setInput(input+"-")}}>-</button><br/>
                <button onClick={()=>{setInput(input+"*")}}>*</button>
                <button onClick={()=>{setInput(input+"/")}}>/</button>
                <button onClick={()=>{setInput("")}}>Clr</button><br/>
                

            </center>

        </div>
    )

}
export default Calci