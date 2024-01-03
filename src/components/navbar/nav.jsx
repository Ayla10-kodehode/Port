import { Link } from './link';
import './nav.css';
import { FaGithubAlt } from "react-icons/fa";

export const Navbar = () => {
    return(
        <header className="navBox">
            <FaGithubAlt className="logo" />
            <section className="links">
                <Link text="Home" href=""></Link>
                <Link text="About" href=""></Link>
                <Link text="Projects" href=""></Link>
                <Link text="Contact" href=""></Link>
            </section>
        </header>
    )
}