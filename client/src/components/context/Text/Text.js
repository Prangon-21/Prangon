import './Text.css'

const Text = (props) => {
    return ( 
        <div className={props.own ? "textOwn" : "text"}>
            <div className="textTop">
                <p className="chat">{ props.messages.text }</p>
            </div>
        </div>
     );
}
 
export default Text;