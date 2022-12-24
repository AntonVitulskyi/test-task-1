import { Component } from 'react';
import cards from '../cardsData/cardsData.json'

import Container from './Container/Container';
import CardList from './CardtList/CardList';

export class App extends Component {
  state = {
  
  };

  render() {
    return (
      <>
        <Container>
          <CardList
          cards={cards}
          />
        </Container>
      </>
    );
  }
}
