import React, {useState} from "react"
import "./Login.css"
import Axios from "axios"
import Homebar from "../../context/Homebar/Homebar";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [bracu_id, setId]= useState("");
    const [password, setPassword]= useState("");
    const [loginstatus, setLoginstatus]= useState("");
    let history = useHistory();
    

    const login = () =>{
        Axios.get(`http://localhost:3001/login`,
        {params:{
            bracuId:bracu_id, 
            password:password} 
        })
        .then((response)=>{
            if (response.data.messege){
                setLoginstatus(response.data.messege)
            }
            else{
                history.push('/feed');
            }
            
            
        });
    };

    const accountDelete = () =>{
        Axios.delete(`http://localhost:3001/login`,
        {params:{
            bracuId:bracu_id, 
            password:password} 
        })
        .then((response)=>{
            if (response.data.messege){
                setLoginstatus(response.data.messege)
            }
            else{
                history.push('/signup');
            }
            
            
        });
    };


    return (
        <>
            <Homebar />
            <div className="loginBox">
                
                <p className="boxTitle">Login Here</p>
                
                <p className="inputLabel">Bracu Id</p>
                <input className="inputBox" type="text" name="bracu_id" placeholder="Enter ID" 
                autoComplete="Off" 
                value = {bracu_id}
                onChange={(e) => setId(e.target.value)}
                ></input>

                <p className="inputLabel">Password</p>
                <input className="inputBox" type="password" name="password" placeholder="Enter Password"
                autoComplete="Off" 
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>

                <p className="loginStatus">{ loginstatus }</p>

                <button className="loginSubmitButton" onClick={login}>Login</button>
                <button className="loginSubmitButton" onClick={accountDelete}>Delete Account</button>
            </div>
             
        </> 
     );
}
 
export default Login;

