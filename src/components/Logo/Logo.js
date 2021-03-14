import React from 'react';
import { NavLink } from 'react-router-dom';

import logoSvg from '../../assets/images/logo.svg';
import classes from './Logo.css';

const logo = (props) => (
  <NavLink to="/" exact>
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logoSvg} alt="" />
    </div>
  </NavLink>
);

export default logo;