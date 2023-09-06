import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";




function NavBar() {
    return (
        <>
            <nav>
                <ul className="ul-style">
                    <li className="li-style"><Link to={`/`}>Home</Link></li>
                    <li className="li-style" ><Link to={`/category/idiomas`}>Libros de idiomas</Link></li>
                    <li className="li-style" ><Link to={`category/literatura`}>Libros literatura</Link></li>
                    <li className="li-style" ><a href="/contact"><CartWidget /></a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
