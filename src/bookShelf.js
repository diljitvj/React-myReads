import React from 'react'
import Book from './book.js'

function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book)=>(
                        <li key={book.id}>
                            <Book addToShelf={props.addToShelf} key={book.id} book={book}/>
                        </li>
                    ))
                }
            </ol>
            </div>
        </div>
    )
}

export default BookShelf