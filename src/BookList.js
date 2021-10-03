import React, { Component } from 'react'
import Book from './Book'

export default class BookList extends Component {
    state = {
        books: [
            {
                id: 1,
                book: 'book number one',
                author: 'john doe'
            },
            {
                id: 2,
                book: 'book number two',
                author: 'bobby doe'
            },
            {
                id: 3,
                book: 'book number three',
                author: 'peter doe'
            }
        ]
    }
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
                <h3>This is our book</h3>
                {this.state.books.map((item, index) => <Book key={item.id} info={item} />)}

            </section>
        )
    }
}
