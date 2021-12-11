import './Convo.css'
import proPic from '../images/emptyPic.png'

const Convo = () => {
    return ( 
        <div className="convo">
            <img src={proPic} alt="img" className="convoImg" />
            <span className="convoName">Rafiad Sadat</span>
        </div>
     );
}
 
export default Convo;