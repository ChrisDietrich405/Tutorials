import { FaSearch } from "react-icons/fa"
import Logo from "../../images/logo.png"
import "./styles.scss"

// import { Logo } from "../../images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <img src={Logo} className="logo"/>
            </div>
            <ul className="list-container">
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Testimonials</li>
            </ul>
            <div className="search-container">
                <FaSearch />
            </div>

        </nav>
    )
}