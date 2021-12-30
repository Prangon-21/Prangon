import "./Home.css"
import Homebar from "../../context/Homebar/Homebar";

const Home = () => {
    return (
        <>
            <Homebar />
            <div className="welcomeBox">
                <p className="welcomeTitle">Welcome to Pra<span id='N'>N</span>gon</p>
            </div>
        </>
     );
}
 
export default Home;