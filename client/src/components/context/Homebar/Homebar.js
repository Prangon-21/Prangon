import './Homebar.css'
import { Link } from 'react-router-dom'

const Homebar = () => {
    return ( 
        <nav>
            <div className='logo'>Pra<span id='N'>N</span>gon</div>
            <ul>
                <li><Link id="link" to="/login">Login</Link></li>
                <li><Link id="link" to="/signup">Signup</Link></li>
            </ul>
        </nav>
     );
}
 
export default Homebar;