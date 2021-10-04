import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // state = {
    //     count: 1
    // }

    // handleClick(e) {
    //     console.log(e)
    //     console.log(this.state.count)
    // }

    // arrow functions don't create their own context so we don't need to bind it
    addCount = () => {
        // this.state.count++; //not proper way because mutates the state
        this.setState({
            count: this.state.count + 1
        })
    }

    lowerCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { img, title, author } = this.props.info;

        return (
            <article className="book">
                <img src={img} width="150" alt={`book-${title}`} />
                <div>
                    <h3>Title : {title} </h3>
                    <h5>Author : {author}</h5>
                    <h3>count : {this.state.count}</h3>
                    <button type="button" onClick={this.addCount}>add count</button>
                    <button type="button" onClick={this.lowerCount}>lower count</button>
                    <button type="button" onClick={this.resetCount}>reset count</button>
                </div>
            </article>
        )
    }
}

