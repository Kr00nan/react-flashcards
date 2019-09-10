import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import FlashcardForm from './components/FlashcardForm';
import Card from './components/Card';
// import './App.css';

class App extends React.Component {
  state = {
    flashcards: [
      {id: 1, question: 'What is you name?', answer: 'Michael'},
      {id: 2, question: 'What are you studying?', answer: 'ReactJS'},
      {id: 3, question: 'From where are you learning it?', answer: 'DevPoint Labs'}
    ]
  }
  render() {
    return (
      <Container>
        <Header as='h1'>Hello World!</Header>
        <FlashcardForm></FlashcardForm>
        <Card></Card>
      </Container>
    )
  }
}

export default App;
