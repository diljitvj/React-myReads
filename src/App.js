import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './searchBooks.js'
import ListBooks from './listBooks.js'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(){
    super();
    this.state = {
      currentlyReadingBooks: [],
      wantToReadBooks: [],
      readBooks: [],
      searchResults: []
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks(){
    BooksAPI
      .getAll()
      .then((books) => {
        this.sortBooks(books);
      })

  }

  sortBooks(books) {
    let currently = [],
      wantTo = [],
      read = [];
    books.forEach((book) => {
      switch (book.shelf) {
        case "currentlyReading":
          currently.push(book);
          break;
        case "wantToRead":
          wantTo.push(book);
          break;
        case "read":
          read.push(book);
          break;
        default:
          break;
      }
    })
    this.setState({currentlyReadingBooks: currently, wantToReadBooks: wantTo, readBooks: read})
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI
        .search(query)
        .then((books) => {
          this.setState({searchResults: books})
        })
    } else {
      this.setState({searchResults: []})
    }
  }

  addToShelf = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then((data) => {
        this.fetchBooks()
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          exact
          render={() => (
            <SearchBooks
              searchResults={this.state.searchResults}
              searchBooks={this.searchBooks}
              addToShelf={this.addToShelf}/>)}/>

        <Route path="/" exact 
          render={() => (
            <ListBooks 
            shelves={this.state}
            addToShelf={this.addToShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
