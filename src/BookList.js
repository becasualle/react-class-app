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
    handleDelete = (id) => {
        const temp = this.state.books.filter(item => item.id !== id);
        this.setState({ books: temp })
    }

    render() {

        return (
            <section>
                <h3>This is our booklist</h3>
                {this.state.books.map((item, index) => <Book key={item.id} info={item} handleDelete={this.handleDelete} />)}

            </section>
        )
    }
}
