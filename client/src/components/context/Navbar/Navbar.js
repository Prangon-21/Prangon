import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>Pra<span id='N'>N</span>gon</div>
            <ul>
                <li><Link id="link" to="/">News Feed</Link></li>
                <li><Link id="link" to="/profile">Profile</Link></li>
                <li><Link id="link" to="/notification">Notifications</Link></li>
                <li><Link id="link" to="/message">Messenges</Link></li>
                <li><Link id="link" to="/logout">Log Out</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;