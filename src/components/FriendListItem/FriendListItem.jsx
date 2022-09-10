// import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
          <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

