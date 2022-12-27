import { Component } from 'react';
import cards from '../cardsData/cardsData.json';

import Container from './Container/Container';
import CardList from './CardtList/CardList';

export class App extends Component {
  state = {
    followingCards: [],
  };

  getFollowingsFromStorage() {
    if (JSON.parse(localStorage.getItem('following') === null)) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('following'));
    }
  }

  componentDidMount() {
    this.setState({ followingCards: this.getFollowingsFromStorage() });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.followingCards !== prevState.followingCards) {
      localStorage.setItem(
        'following',
        JSON.stringify(this.state.followingCards)
      );
    }
  }

  onClickFollow = itemId => {
    this.setState(prevState => {
      if (prevState.followingCards.includes(Number(itemId))) {
        return {
          followingCards: prevState.followingCards.filter(
            id => id !== Number(itemId)
          ),
        };
      }
      return {
        followingCards: [...prevState.followingCards, Number(itemId)],
      };
    });
  };

  render() {
    return (
      <>
        <Container>
          <CardList
            cards={cards}
            onClickFollow={this.onClickFollow}
            followingCards={this.state.followingCards}
          />
        </Container>
      </>
    );
  }
}
