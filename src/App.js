import React from 'react';
import BookList from './BookList'

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>This is our application</h1>
        <BookList />
      </section>
    )
  }
}

export default App;
