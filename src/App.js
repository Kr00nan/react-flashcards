import React from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import FlashcardForm from './components/FlashcardForm';
import Flashcard from './components/Flashcard';

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, question: 'What is your first name?', answer: 'Michael' },
      { id: 2, question: 'What are you studying?', answer: 'ReactJS' },
      { id: 3, question: 'From where are you learning it?', answer: 'DevPoint Labs' }
    ]
  };

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.state.flashcards.length + 1, ...flashcardData, };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], });
  };

  deleteFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter(flashcard => {
      if (flashcard.id !== id)
        return flashcard
    });
    this.setState({ flashcards: [...flashcards], });
  };

  render() {
    return (
      <Container style={{marginTop: '25px'}}>
        <Header textAlign='center'>
          <Image src='./img/beaker-purple.png' avatar />
          <span>React :: Flashcard Application</span>
        </Header>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={4}>
              <FlashcardForm add={this.addFlashcard} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Flashcard flashcards={this.state.flashcards} remove={this.deleteFlashcard} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
};

export default App;
