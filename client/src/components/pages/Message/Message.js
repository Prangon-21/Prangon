import { useEffect, useState } from "react";
import './Message.css';
import Navbar from "../../context/Navbar/Navbar";
import Convo from '../../context/Convo/Convo';
import Text from '../../context/Text/Text';
import Axios from 'axios';

const Message = () => {

    const userId = 20101580
    const [sendText, setSendText] = useState("");
    const [chatHead, setChatHead] = useState([]);
    const [currentUser, setCurrentUser] = useState({id:userId});
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/chathead`)
        .then((res) => {
            setChatHead(res.data);
        });
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:3001/messagelist`, {
            params:{
                id: userId+currentUser.id,
            }
        })
        .then((res) => {
            setMessages(res.data);
        })
    },[currentUser])


    return ( 
        <>
            <Navbar />
            <div className='messanger'>
                <div className="chatMenu">
                    <div className="menuWrapper">
                        <input placeholder="Search for conversation" className="menuSearch" />
                        {chatHead.map((user, key) => {
                            return  (
                            <div onClick={() => setCurrentUser(user)}>
                                <Convo user={user} />
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="chatBox">
                    <div className="boxWrapper">
                        { currentUser?
                        <>
                        <div className="boxTop">
                            { messages.map((mesInfo ,key) => {
                                return <Text messages={mesInfo} own={mesInfo.send_id == userId}/>
                            })}
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
                            onClick={() => {
                                Axios.post(`http://localhost:3001/sendtext`, {
                                    convo_id: userId+currentUser.id,
                                    send_id: userId,
                                    receive_id: currentUser.id,
                                    sendText: sendText,
                                }
                                ).then((res) => {
                                });
                            }}
                            >Send</button>
                        </div>
                        </> : <span className="noConvo">Open a conversation to chat</span>}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Message;