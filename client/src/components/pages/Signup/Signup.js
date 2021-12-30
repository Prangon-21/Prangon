import React, {useState} from "react";
import "./Signup.css"
import Axios from "axios"
import Homebar from "../../context/Homebar/Homebar";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [name, setName]= useState("");
    const [bracuId, setId]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [department, setDepartment]= useState("");
    const [roll, setRoll]= useState("");
    const [signupstatus, setSignupstatus]= useState("");
    let history = useHistory();


    const signup = () =>{
        Axios.post(`http://localhost:3001/register`,
        {username:name, 
        bracuId:bracuId, 
        email:email,
        department:department,
        roll:roll,
        password:password}).then((response)=>{
            console.log(response);
            history.push('/login');
        });
    };



    return (
        <>
            <div id="top"></div>
            <Homebar />
            <section className="signup">
            {/* <form action=""> */}
                <div className="Heading">
                    <h1>Sign-up</h1>
                </div>
                    <div className="input_field">
                        <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" 
                            autoComplete="Off" 
                            value = {name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="input_field">
                        <label htmlFor="bracuId">BRACU Id</label>
                            <input classname= "input_box" type="int" name="bracuId" id="bracuId" 
                            autoComplete="Off"
                            value = {bracuId}
                            onChange={(e) => setId(e.target.value)}
                            />
                    
                    </div>
                    <div className="input_field">
                        <label htmlFor="email">Email</label>
                            <input classname= "input_box" type="text" name="email" id="email" 
                            autoComplete="Off" 
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="input_field">
                        <label htmlFor="department">Department</label>
                            <input classname= "input_box" type="text" name="department" id="department" 
                            autoComplete="Off" 
                            value = {department}
                            onChange={(e) => setDepartment(e.target.value)}
                            />
                    
                    </div>
                    <div className="input_field">
                        <label htmlFor="roll">Roll</label>
                        <select classname= "input_box" name="roll" id="roll" 
                            autoComplete="Off" 
                            value = {roll}
                            onChange={(e) => setRoll(e.target.value)}
                            defaultValue="Select Roll">
                            <option defaultValue>Select Roll</option>
                            <option value="faculty">Faculty</option>
                            <option value="student">Student</option>
                        </select>   
                    </div>
                    <div className="input_field">
                        <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="password" 
                            autoComplete="Off" 
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    
                    </div>

                    
                    {/* <button type="submit" onClick={signup}>Signup</button> */}
                    

                {/* </form> */}
                <button type="submit" onClick={signup}>Signup</button>
            
            </section>
             
        </> 
     );
}
 
export default Signup;


