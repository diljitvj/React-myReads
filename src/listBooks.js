import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './bookShelf.js'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static PropTypes = {
    shelves : PropTypes.object.isRequired
  }
  
  render() {
    let shelves = this.props.shelves;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf addToShelf={this.props.addToShelf} books={shelves.currentlyReadingBooks} title="Currently Reading"/>
            <BookShelf addToShelf={this.props.addToShelf} books={shelves.wantToReadBooks} title="Want to Read"/>
            <BookShelf addToShelf={this.props.addToShelf} books={shelves.readBooks} title="Read"/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks