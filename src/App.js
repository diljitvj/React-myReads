import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './searchBooks.js'
import ListBooks from './listBooks.js'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
            <Route path="/search" exact
              render={
                ()=>(
                  <SearchBooks/>
                )
              } />
            <Route path="/" exact
              render={
                ()=>(
                  <ListBooks/>
                )
              } />
      </div>
    )
  }
}

export default BooksApp
