import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Books from '../components/Course'

const SPACE_ID = ''
const ACCESS_TOKEN = ''


class BookList extends Component {
  state = {
    courses: [],
    searchString: ''
  }

  constructor() {
    super()
    this.getBooks()
  }

  getBooks = () => {
    clientInformation.getEntries({
      content_type: 'book',
      query: this.state.searchString
    })
    .then((response) => {
      this.setState({books: response.items})
    })
    .catch((error) => {
      console.log("Error occured while fetching data")
      console.log(error)
    })
  }

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
    this.getBooks()
  }


  render() {
    return (
      <div>
        {this.state.books ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              palceholder="Search for books"
              margin="normal"
              onChange={this.onSearchInputChange} />
            <Grid container spacing={24} style={{padding: 24}}>
            { this.state.books.map(currentBook => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Book book={currentBook} />
              </Grid>
            ))}
            </Grid>
          </div>
        ) : "No books found" }
      </div>
    )
  }
}

export default BookList;