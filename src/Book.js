import React, { Component } from 'react';
import Button from './Button';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    render() {
        const { img, title, author } = this.props.info;
        const { handleDelete } = this.props;

        return (
            <article className="book">
                <img src={img} width="150" alt={`book-${title}`} />
                <div>
                    <h3>Title : {title} </h3>
                    <h6>Author : {author}</h6>
                    <Button handleDelete={handleDelete} />

                </div>
            </article>
        )
    }
}

