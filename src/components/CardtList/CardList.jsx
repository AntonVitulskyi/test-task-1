import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../CardtList/CardList.module.css';
import CardItem from 'components/CardItem/CardItem';

export default function CardList({cards}) {

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
          />
        ))}
      </ul>
    </>
  );
}

// ContactItem.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       id: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   filter: PropTypes.string,
//   onClickDeleteContact: PropTypes.func,
// };
