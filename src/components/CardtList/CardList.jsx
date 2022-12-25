import React from 'react';
import PropTypes from 'prop-types';

import styles from '../CardtList/CardList.module.css';
import CardItem from 'components/CardItem/CardItem';

export default function CardList({ cards, onClickFollow, followingCards }) {
  return (
    <>
      <ul className={styles.list}>
        {cards.map(card => (
          <CardItem
            key={card.id}
            id={card.id}
            user={card.user}
            tweets={card.tweets}
            followers={card.followers}
            avatar={card.avatar}
            onClickFollow={onClickFollow}
            followingCards={followingCards}
          />
        ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user: PropTypes.string,
      tweets: PropTypes.number,
      followers: PropTypes.number,
      avatar: PropTypes.string,
    })
  ),
  followingCards: PropTypes.array,
  onClickFollow: PropTypes.func,
};
