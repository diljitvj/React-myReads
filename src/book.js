import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static PropTypes = {
        book: PropTypes.object.isRequired,
        addToShelf: PropTypes.func.isRequired
    }
    render() {
        let book = this.props.book;

        return (
            <div>
                {book
                    ? (
                        <div className="book" draggable>
                            <div className="book-top">
                                {book.imageLinks
                                    ? (
                                        <div
                                            className="book-cover"
                                            style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}></div>
                                    )
                                    : (
                                        <div
                                            className="book-cover"
                                            style={{
                                            width: 128,
                                            height: 193,
                                            backgroundColor: "black"
                                        }}></div>
                                    )}

                                <div className="book-shelf-changer">
                                    <select defaultValue={book.shelf || 'none'} onChange={(event) => {
                                        this.props.addToShelf(book, event.target.value)
                                    }}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">
                                {book.title}</div>
                            <div className="book-authors">
                                {(book.authors && book.authors.length)
                                    ? (book.authors[0])
                                    : ("")}
                            </div>
                        </div>
                    )
                    : (
                        <div></div>
                    )}
            </div>
        )
    }
}

export default Book