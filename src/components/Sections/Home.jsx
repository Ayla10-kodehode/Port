import './Home.css';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaReact } from "react-icons/lia";
import { BiLogoVisualStudio } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";

export const Home = () => {

    return(
        <section id="HomeSec">
            <div className="HomeDiv">
            <div className="HeroSec">
            <div className="TextBox">
                <h1>Front-end <br/>Utvikler</h1>    
                <p>Litt tekst om meg, og litt mer tekst</p>
                <div className="IconDiv">
                    <FaLinkedin className="icon"/>
                    <IoLogoGithub className="icon" />
                </div>
                <div>
                <h2 className="Ferdigheter">Ferdigheter</h2>
                <div className="UnderDiv">
                <TbBrandHtml5 className="icon"/>
                <TbBrandCss3 className="icon"/>
                <TbBrandJavascript className="icon"/>
                <LiaReact className="icon"/>
                <BiLogoVisualStudio className="icon"/>
                <CgFigma className="icon"/>
                </div>
                </div>
                </div>
                <img src='/public/Pop-out.svg'></img>
                </div>
            </div>
        </section>
    )
}