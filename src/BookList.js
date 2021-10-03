import React, { Component } from 'react'
import Book from './Book'
import booksData from './BookData'

export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: booksData
        }
    }
    // state = { books: booksData }
    // this.setState({})
    render() {
        // const books = this.state.books.map(item => item.book);
        // console.log(books);

        // filter
        // forEach
        // map
        // reduce

        return (
            <section>
                <h3>This is our booklist</h3>
                {this.state.books.map((item, index) => <Book key={item.id} info={item} />)}

            </section>
        )
    }
}
