import { useEffect, useRef, useState } from "react";
import Axios from 'axios';
import './Message.css';
import Navbar from "../../context/Navbar/Navbar";
import Convo from '../../context/Convo/Convo';
import Text from '../../context/Text/Text';
import proPic from '../../context/images/emptyPic.png';


const Message = () => {

    const userId = 20101580
    const [sendText, setSendText] = useState("");
    const [chatHead, setChatHead] = useState([]);
    const [currentUser, setCurrentUser] = useState({bracu_Id:userId});
    const [messages, setMessages] = useState([]);
    const scrollref = useRef();
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/chathead`)
        .then((res) => {
            setChatHead(res.data);
        });
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:3001/conversation`, {
            params:{
                convo_id: userId+currentUser.bracu_Id,
            }
        })
        .then((res) => {
            setMessages(res.data);
        })
    },[currentUser, sendText])

    useEffect(() => {
        scrollref.current?.scrollIntoView()
    },[messages])

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
                        { currentUser.name ?
                        <>
                        <div className="boxTop">

                            <div className="chatHead">
                                <img src={proPic} alt="img" className="headImg" />
                                <span className="headName">{ currentUser.name }</span>
                                <button className="textSubmit"
                                id="textDelete"
                                onClick={(e) => {
                                    e.preventDefault()
                                    Axios.delete(`http://localhost:3001/conversation`, {
                                        params:{
                                            convo_id: userId+currentUser.bracu_Id,
                                        }
                                    })
                                    .then((res) => {
                                        setMessages([]);
                                    })
                                }
                                }
                                >Delete Conversation</button>
                                </div>
                            <div className="textBox">
                            { messages.map((mesInfo ,key) => {

                                return (
                                    <div ref={ scrollref }>
                                        <Text messages={mesInfo} own={mesInfo.sender_id == userId} />
                                    </div>
                                )
                            })}
                            </div>
                        
                        </div>

                        <div className="boxBottom">
                            
                            <input
                            className="textInput"
                            type="text"
                            onChange={(e) => {
                                setSendText(e.target.value)
                            }}
                            value={ sendText }
                            placeholder="Your Message..."></input>

                            <button
                            className="textSubmit"
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                Axios.post(`http://localhost:3001/conversation`, {
                                    convo_id: userId+currentUser.bracu_Id,
                                    sender_id: userId,
                                    receiver_id: currentUser.bracu_Id,
                                    sendText: sendText,
                                }
                                ).then((res) => {
                                    setSendText("")
                                });
                            }
                            }
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