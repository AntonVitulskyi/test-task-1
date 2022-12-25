import React from 'react';
import PropTypes from 'prop-types';
import bgImage from '../../images/picture.png';
import logo from '../../images/logo.svg';
import Ellipse from '../../images/Ellipse.svg';
import styles from '../CardItem/CardItem.module.css';

export default function CardItem({
  id,
  user,
  tweets,
  followers,
  avatar,
  onClickFollow,
  followingCards,
}) {
  return (
    <li className={styles.item}>
      <div className={styles.topContainer}>
        <img className={styles.logo} src={logo} alt="LOGO" />
        <img className={styles.bgImage} src={bgImage} alt="Background" />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.avatarContainer}>
          <img className={styles.ellipse} src={Ellipse} alt="Ellipse" />
          <img className={styles.avatar} src={avatar} alt={user} />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.tweets}>
          <span>{new Intl.NumberFormat('en').format(tweets)} </span>TWEETS
        </p>
        <p className={styles.followers}>
          <span>
            {new Intl.NumberFormat('en').format(
              followingCards.includes(id) ? followers + 1 : followers
            )}{' '}
          </span>
          FOLLOWERS
        </p>
        <button
          id={id}
          onClick={onClickFollow}
          className={
            followingCards.includes(id) ? styles.buttonFollowing : styles.button
          }
        >
          {followingCards.includes(id) ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </div>
    </li>
  );
}

CardItem.propTypes = {
  id: PropTypes.number,
  user: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  avatar: PropTypes.string,
  followingCards: PropTypes.array,
  onClickFollow: PropTypes.func,
};
