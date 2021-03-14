import React from 'react';
import { connect } from 'react-redux';

import classes from './Avatar.module.css';

const AvatarImg = props => {

  const { photoUrl, name } = props;

  return (
    <div className={classes.Container}>
      <div className={classes.Avatar}>
        {photoUrl !== null
          ? <img src={photoUrl} alt="User" />
          : name.substr(0, 2).toUpperCase()}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.auth.name,
    photoUrl: state.auth.photoUrl,
    emailVerified: state.auth.emailVerified
  }
}

export default connect(mapStateToProps)(AvatarImg);

