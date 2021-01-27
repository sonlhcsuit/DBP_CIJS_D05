
export function searchBook(keywords){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${keywords}`)
        .then(res => res.json())
        
}