import { useEffect, useState } from "react";
import './Message.css';
import Navbar from "../../context/Navbar/Navbar";
import Convo from '../../context/Convo/Convo';
import Text from '../../context/Text/Text';
import Axios from 'axios';

const Message = () => {
    
    const [sendText, setSendText] = useState("");
    
    const regis = () => {
        Axios.get(`http://localhost:3001/text`, {
            sendText: sendText,
        }).then((res) => {
            console.log(res)
        });
    }

    return ( 
        <>
            <Navbar />
            <div className='messanger'>
                <div className="chatMenu">
                    <div className="menuWrapper">
                        <input placeholder="Start a new conversation" className="menuSearch" />
                        <Convo />
                        <Convo />
                        <Convo />
                        <Convo />
                        <Convo />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="boxWrapper">
                        <div className="boxTop">
                            <Text />
                            <Text own={true}/>
                            <Text />
                            <Text />
                            <Text own={true}/>
                            <Text />
                            <Text />
                            <Text own={true}/>
                            <Text />
                            <Text />
                            <Text own={true}/>
                            <Text />
                        </div>
                        <div className="boxBottom">
                            
                            <input
                            className="textInput"
                            type="text"
                            onChange={(e) => {
                                setSendText(e.target.value)
                            }} placeholder="Your Message..."></input>

                            <button
                            className="textSubmit"
                            type="submit"
                            onClick={regis}
                            >Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Message;