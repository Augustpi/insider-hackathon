import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Link.module.css';

const navigationItem = (props) => {

  const linkStyles = [classes.Link]
  if (props.home === 'homepage') linkStyles.push(classes.homepage);

  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      className={linkStyles.join(' ')}
      activeClassName={classes.active}>{props.children}</NavLink>
  );
}
export default navigationItem;