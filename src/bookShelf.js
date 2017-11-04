import React, { Component } from 'react'
import Book from './book.js'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static PropTypes = {
        books : PropTypes.array.isRequired
    }
    
    render(){
        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books.map((book)=>(
                            <li key={book.id}>
                                <Book key={book.id} book={book}/>
                            </li>
                        ))
                    }
                </ol>
              </div>
            </div>
        )
    }
}

export default BookShelf