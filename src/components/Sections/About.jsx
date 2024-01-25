import './About.css';

export const About = () => {

    return(
        <section id="AboutSec">
            <div className="AboutDiv">
                <img src="/public/Laptop.avif" alt="Laptop" />
                <article>
                    <h3>Om Meg</h3>
                    <h2>Dedikert Front-end Utvikler</h2>
                    <div className="Para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar et dolor nec dictum. Cras ultricies, mauris nec viverra viverra, arcu nisi tincidunt nulla, eu bibendum dui sem convallis odio. Integer vel odio non quam gravida lobortis suscipit finibus erat. Pellentesque tellus sem, accumsan eget tempus a, bibendum at risus. Mauris hendrerit posuere vulputate. Vestibulum condimentum gravida nulla et rutrum. Curabitur turpis magna, vulputate vitae pretium in, sagittis sit amet ipsum. Proin condimentum ex nec pharetra commodo. Nam venenatis pharetra sapien, in rhoncus augue ornare in. Suspendisse urna magna, pretium et tincidunt nec, ornare vitae sapien.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}