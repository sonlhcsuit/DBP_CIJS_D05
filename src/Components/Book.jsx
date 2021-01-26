import '../assets/css/Book.css'
export function Book({ volumeInfo }) {

    const coverImage = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    const title = volumeInfo.title || 'N/a'
    const authors = volumeInfo.authors?.join(', ') || 'N/a'
    const publisher = volumeInfo.publisher || 'N/a'
    const details = volumeInfo.previewLink || '#'
    return (
        <div className="book-cont border">
            <div className="book-cover border">

                <img src={coverImage} alt={volumeInfo.description} />

            </div>
            <div className="book-info ">
                <p className="book-title">{title}</p>
                <p className="book-authors">Authors: {authors}</p>
                <p className="book-publisher">Publisher: {publisher}</p>
                <a className="book-details" href={details} target="_blank" rel="noreferrer">More details</a>

            </div>
        </div>
    )
}
