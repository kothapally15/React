import axios from "axios";
import React,{useState} from "react";

function Hooks(){
    const [data, setdata] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const {username,email,password,confirmPassword}= data
    const onChange =e=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault()
        if(username.length<=5) {
            alert('Username should contain atleast 5 characters')

        }
        else if (password!=confirmPassword) {
            alert(' passwords are not matching')
           
        } else {

            axios.post('https://myfirstproject-490f2-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("submitted Successfully"))
             
            
        }
        
    }

    return(
        <div>
            <center>
            <h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" value={username}
                onChange={onChange} placeholder="username" />
                <br/>
                <input type="email" name="email" value={email}
                onChange={onChange} placeholder="email" />
                <br/>
                <input type="password" name="password" value={password}
                onChange={onChange} placeholder="password" />
                <br/>
                <input type="password" name="confirmPassword" value={confirmPassword}
                onChange={onChange} placeholder="confirmPassword" />
                {password!=confirmPassword?<p style={{'color':'red'}}> Passwords not matched  </p>:null}
                <br/>
                <input type="submit" name="submit" />
            </form>
            </h1>
            </center>

        </div>
    )

}
export default Hooks