import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './book.js'
import {Debounce} from 'react-throttle'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  onSearch = (query) => {
    this.setState({
      query: query.trim()
    })
    this.props
      .searchBooks(query);
  }

  componentWillUnmount(){
    this.onSearch('');
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.onSearch(event.target.value)}/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResults
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} addToShelf={this.props.addToShelf}/>
                </li>
              ))}
            <li></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks