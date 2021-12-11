import './Text.css'

const Text = ({own}) => {
    return ( 
        <div className={own ? "textOwn" : "text"}>
            <div className="textTop">
                <p className="chat">This is the message</p>
            </div>
        </div>
     );
}
 
export default Text;