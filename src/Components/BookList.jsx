import '../assets/css/BookList.css'
import { Book } from './Book'

export function BookList(props) {
    return (
        <div className="booklist-area">
            {
                props.books.slice(0,10).map(book => {
                    return (
                        <Book {...book}/>
                    )
                })

            }
        </div>
    )
}

