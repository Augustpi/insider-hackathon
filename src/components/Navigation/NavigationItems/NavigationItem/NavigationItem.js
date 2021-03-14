import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import { ArrowBackOutline } from 'react-ionicons';

const navigationItem = (props) => {

  const { icon } = props;
  const iconClass = [];

  if (icon === 'Default') iconClass.push(classes.Default);
  if (icon === 'Profile') iconClass.push(classes.Profile);
  if (icon === 'Add') iconClass.push(classes.Add);
  if (icon === 'Cash') iconClass.push(classes.Cash);
  if (icon === 'Search') iconClass.push(classes.Search);
  if (icon === 'Exit') iconClass.push(classes.Exit);
  if (icon === 'History') iconClass.push(classes.History);
  if (icon === 'Login') iconClass.push(classes.Login);
  if (icon === 'SignUp') iconClass.push(classes.SignUp);

  return (

    <li className={classes.NavigationItem}>

      <div className={classes.Container}>
        <NavLink
          to={props.link}
          exact={props.exact}
          activeClassName={classes.active}>

          <div className={classes.MenuLogo}>
            <img className={iconClass.join(' ')} alt={props.menuExplain} />
          </div>

          <div className={classes.MenuText}>
            <ArrowBackOutline
              color={'#00000'}
              height="250px"
              width="250px"
            />
            <div className={classes.Text}>
              <div className={classes.LinkText}>
                {icon === 'Search' ? <div className={classes.search}></div> : null}
                {icon === 'Add' ? <div className={classes.add}></div> : null}
                {icon === 'Exit' ? <div className={classes.exit}></div> : null}
                {icon === 'Login' ? <div className={classes.signIn}></div> : null}
                {icon === 'SignUp' ? <div className={classes.newMember}></div> : null}
                {props.children}
              </div>
              <div className={classes.MenuExplain}>{props.menuExplain}</div>
            </div>
          </div>

        </NavLink>
      </div>

    </li>
  )
};

export default navigationItem;