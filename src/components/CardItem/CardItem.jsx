import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bgImage from '../../images/picture.png';
import logo from '../../images/logo.svg';
import Ellipse from '../../images/Ellipse.svg';
import styles from '../CardItem/CardItem.module.css';

export default class CardItem extends Component {
  state = {
    followersCount: this.props.followers,
    isFollowing: this.props.isFollowing ?? false,
  };

  handleChangeFollowers = () => {
    const { onClickFollow, id } = this.props;
    onClickFollow(id);
    this.setState(prevState => {
      if (prevState.isFollowing) {
        return {
          followersCount: prevState.followersCount - 1,
          isFollowing: !prevState.isFollowing,
        };
      }
      return {
        followersCount: prevState.followersCount + 1,
        isFollowing: !prevState.isFollowing,
      };
    });
  };

  render() {
    const { id, user, tweets, avatar, followingCards } = this.props;
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
              {new Intl.NumberFormat('en').format(this.state.followersCount)}
            </span>
            FOLLOWERS
          </p>
          <button
            id={id}
            onClick={this.handleChangeFollowers}
            className={
              followingCards.includes(id)
                ? styles.buttonFollowing
                : styles.button
            }
          >
            {followingCards.includes(id) ? 'FOLLOWING' : 'FOLLOW'}
          </button>
        </div>
      </li>
    );
  }
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
