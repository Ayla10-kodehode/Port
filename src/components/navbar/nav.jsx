import './nav.css';
import {useState} from 'react';
import { LinkClick } from '../Elements/LinkClick';

export const Navbar = () => {
    const [active, setActive] = useState("");
    
    return(
            <header className="header">
                <nav className="navBox"> 
                    <h3>Ayla</h3>
                    <section className="links">
                    <LinkClick href="#HomeSec" text="Hjem" active={active} setActive={setActive} />
                    <LinkClick href="#AboutSec" text="Om Meg" active={active} setActive={setActive} />
                    <LinkClick href="#ProjectSec" text="Prosjekter" active={active} setActive={setActive} />
                    <LinkClick href="#ContactSec" text="Kontakt Info" active={active} setActive={setActive} />
                    </section>
                </nav>
            </header>
    )
};