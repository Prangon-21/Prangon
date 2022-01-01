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


        // Axios.delete(`http://localhost:3001/login`,
        // {params:{
        //     bracuId:bracu_id, 
        //     password:password} 
        // })
        // .then((response)=>{
        //     if (response.data.messege){
        //         setLoginstatus(response.data.messege)
        //     }
        //     else{
        //         history.push('/signup');
        //     }
            
            
        // });
    };


    return (
        <>
            <div id="top"></div>
            <Homebar />
            <div className="login">
                <div className="login-content">
                    <form action="">
                        <h2 className="title">Welcome</h2>
           		            <div className="log-div">
           		   		        <h5>BRACU ID</h5>
           		   		        <input type="text" name="bracu_id" id="bracu_id" 
                                autoComplete="Off" 
                                value = {bracu_id}
                                onChange={(e) => setId(e.target.value)}
                                />
           		             </div>
    
                        
           		            <div className="log-div">
           		    	        <h5>Password</h5>
           		    	        <input type="text" name="password" id="password" 
                                autoComplete="Off" 
                                value = {password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
            	            </div>

                        {/* <a href="#">Forgot Password?</a> */}
            	        

                    </form>
                    <button onClick={login}>Login</button>
                    {/* <button on onClick={login}>Delete Account</button> */}
                </div>
                <h1>{loginstatus}</h1>
                
            </div>
             
        </> 
     );
}
 
export default Login;


