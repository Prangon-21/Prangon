import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>Pra<span id='N'>N</span>gon</div>
            <ul>
                <li><a href="#">News Feed</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messenges</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;