import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../CardItem/CardItem.module.css';

export default function CardItem({ id, user, tweets, followers, avatar}) {
  return (
    <li className={styles.item}>
      <h1>{user}</h1>
<p>TWEETS</p><span>{tweets}</span>
<p>FOLLOWERS</p><span>{followers}</span>
<img width="30px" height="100%" src={avatar} alt={user} />
<button>FOLLOW</button>
    </li>
  );
}

// CardItem.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   id: PropTypes.string,
//   onClickDeleteContact: PropTypes.func,
// };
