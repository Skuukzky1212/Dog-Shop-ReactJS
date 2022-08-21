import { Link } from "react-router-dom";
import { Nav } from "./styles"

function NavBar() {
    return ( 
        <Nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/cart'}>My cart</Link>
        </Nav> 
    );
}

export default NavBar;