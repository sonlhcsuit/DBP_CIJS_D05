import '../assets/css/Charity.css'
export function Charity(project) {
    console.log(project.image.imagelink[5])
    const imageLink = project.image.imagelink ? project.image.imagelink[5].url : ''
    const title = project.title
    const contactName = project.contactName
    const contactUrl = project.contactUrl
    return (
        <div className="charity-area border">
            <div className="charity-cover border">
                <img src={imageLink} alt="null" />

            </div>
            <div className="charity-info">
                <p className="charity-title">{title}</p>
                <p className="charity-contact">{contactName}</p>
                <a className="charity-details" href={contactUrl} rel="noreferrer" target="_blank">More Details</a>

            </div>
        </div>
    )
}
