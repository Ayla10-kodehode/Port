import './nav.css';

export const Link = ({href, text}) => {
    return(
        <div className="linkDiv"><a href={href}>{text}</a></div>
    )
}