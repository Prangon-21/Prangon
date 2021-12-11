import { useState } from "react"
import './Message.css'
import Navbar from "../../context/Navbar/Navbar";
import Convo from '../../context/Convo/Convo';
import Text from '../../context/Text/Text';

const Message = () => {
    
    const [text, setText] = useState("");
    
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
                                setText(e.target.value)
                            }} placeholder="Your Message..."></input>
                            <button className="textSubmit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Message;