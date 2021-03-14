import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./Avatar.module.css";
import { ArrowBackOutline } from "react-ionicons";

const Avatar = (props) => {
  const { photoUrl, name } = props;

  return (
    <div className={classes.Container}>
      <div className={classes.Avatar}>
        {photoUrl !== null
          ? (<img src={photoUrl} alt="User" />)
          : (name.substr(0, 2).toUpperCase()
          )}
      </div>
      <div className={classes.UserDetails}>
        <ArrowBackOutline color={"#00000"} title="" height="250px" width="250px" />

        <div>
          <NavLink exact className={classes.link} to="/profile">
            {name}
          </NavLink>
        </div>
        <div className={classes.UserExperience}>Yeni</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    photoUrl: state.auth.photoUrl,
    emailVerified: state.auth.emailVerified,
  };
};

export default connect(mapStateToProps)(Avatar);
