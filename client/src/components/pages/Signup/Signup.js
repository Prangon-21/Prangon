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
            <Homebar />
            <div className="signupBox">
                <p className="boxTitle">Signup Here</p>
                
                <p className="inputLabel">Name</p>
                <input className="inputBox" type="text" name="name" placeholder="Enter Name"
                autoComplete="Off" 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                ></input>
                <p className="inputLabel">Bracu Id</p>
                        <input className="inputBox" type="int" name="bracuId" placeholder="Enter ID"
                        autoComplete="Off"
                        value = {bracuId}
                        onChange={(e) => setId(e.target.value)}
                        />
                
                <p className="inputLabel">Email</p>
                        <input className="inputBox" type="text" name="email" placeholder="Enter Email"
                        autoComplete="Off" 
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <p className="inputLabel">Department</p>
                        <input className="inputBox" type="text" name="department" placeholder="Enter Department"
                        autoComplete="Off" 
                        value = {department}
                        onChange={(e) => setDepartment(e.target.value)}
                        />
                
                <p className="inputLabel">Role</p>
                    <select className="inputBox" name="roll" id="selectRoll" 
                        autoComplete="Off" 
                        value = {roll}
                        onChange={(e) => setRoll(e.target.value)}
                        defaultValue="Select Roll">
                        <option defaultValue>Select a Roll</option>
                        <option value="faculty">Faculty</option>
                        <option value="student">Student</option>
                    </select>   
                <p className="inputLabel">Password</p>
                        <input className="inputBox" type="password" name="password" placeholder="Enter Password"
                        autoComplete="Off" 
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                
                <button className="signinSubmitButton" type="submit" onClick={signup}>Signup</button>
            
            </div>
             
        </> 
     );
}
 
export default Signup;


