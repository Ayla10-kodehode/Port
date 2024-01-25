import './Projects.css'

export const Projects = () => {

    return(
        <section id="ProjectSec">
            <div>
            <div className="TextContainer">
                <div>
                <h3>Prosjekter</h3>
                <h2>Prosjekter fra kurs og eget arbeid</h2>
                </div>
                <div className="SpaceHolder"></div>
                </div>
                <div className="Project1">
                    <article className="P1Text">
                    <h3>Fetching API i React</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar et dolor nec dictum. Cras ultricies, mauris nec viverra viverra, arcu nisi tincidunt nulla, eu bibendum dui sem convallis odio. Integer vel odio non quam gravida lobortis suscipit finibus erat. Pellentesque tellus sem, accumsan eget tempus a, bibendum at risus. Mauris hendrerit posuere vulputate.</p>
                    </article>
                    <img src="/public/VigoOppgave.png" alt="" />
                </div>
           
            </div>
        </section>
    )
}