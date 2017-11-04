import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './searchBooks.js'
import ListBooks from './listBooks.js'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="app">
        <Route path="/search" exact render={() => (<SearchBooks/>)}/>
        <Route path="/" exact render={() => (<ListBooks shelves={this.state}/>)}/>
      </div>
    )
  }
}

export default BooksApp
