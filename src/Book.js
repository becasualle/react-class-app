import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            showInfo: true
        }
    }

    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
        console.log(this.state)
    }

    render() {
        const { id, img, title, author } = this.props.info;
        const { handleDelete } = this.props;

        return (
            <article className="book">
                <img src={img} width="150" alt={`book-${title}`} />
                <div>
                    <h3>Title : {title} </h3>
                    <h6>Author : {author}</h6>
                    <button type="button" onClick={() => handleDelete(id)}>delete me</button>
                    <button type="button" onClick={this.handleInfo}>toggle info</button>
                    {
                        this.state.showInfo && <p>some text</p>
                    }
                </div>
            </article>
        )
    }
}

