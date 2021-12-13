import './Convo.css'
import proPic from '../images/emptyPic.png'

const Convo = (props) => {
    return ( 
        <div className="convo">
            <img src={proPic} alt="img" className="convoImg" />
            <span className="convoName">{ props.user.name }</span>
        </div>
     );
}
 
export default Convo;