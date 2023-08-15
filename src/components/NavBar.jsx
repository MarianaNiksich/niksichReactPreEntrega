import CustomizedBadges from "./CartWidget";

const Navbar = () => {
    return (
        <nav>
            <ul className="ul-style">
                <li className="li-style"><a href="/">Home</a></li>
                <li className="li-style" ><a href="/about">Libros de idiomas</a></li>
                <li className="li-style" ><a href="/about">Libros de literatura</a></li>
                <li className="li-style" ><a href="/contact"><CustomizedBadges /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;