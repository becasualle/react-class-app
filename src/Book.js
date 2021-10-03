import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        // console.log(this.props);
        const { img, title, author } = this.props.info;

        return (
            <article className="book">
                <img src={img} width="150" alt={`book-${title}`} />
                <div>
                    <h3>Title : {title} </h3>
                    <h5>Author : {author}</h5>
                </div>
            </article>
        )
    }
}

