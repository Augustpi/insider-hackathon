import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import AvatarImg from '../../Avatar/Avatarimg';
import Aux from '../../../hoc/Aux/Aux';

const displayMenuOnSideDrawer = (
  <Aux>
    <NavigationItem icon="History" link="/history" menuExplain="Geçmiş">Geçmiş</NavigationItem>
    <NavigationItem icon="Cash" link="/payment" menuExplain="Ödeme bilgileriniz">Ödeme ve İadeler</NavigationItem>
    <NavigationItem icon="Message" link="/notify" menuExplain="Bildirimleriniz">Bildirimler</NavigationItem>
  </Aux>
);

const navigationItems = (props) => (

  <ul className={classes.NavigationItems}>
    {props.isAuthenticated
      ? (
        <Aux>
          {!props.sideDrawer ? <AvatarImg /> : null}
          <NavigationItem icon="Profile" link="/profile" menuExplain="Profil">Profil</NavigationItem>
          <NavigationItem icon="Add" link="/add" menuExplain="Yeni ekle">Yeni ekle</NavigationItem>
          <NavigationItem icon="Search" link="/search" menuExplain="Ara">Ara</NavigationItem>
          {props.sideDrawer ? displayMenuOnSideDrawer : null}
          <NavigationItem icon="Exit" link="/logout" menuExplain="Çıkış">Çıkış</NavigationItem>
        </Aux>
      )
      : (
        <Aux>
          <NavigationItem icon="Add" link="/add" menuExplain="Yeni ekle">Yeni ekle</NavigationItem>
          <NavigationItem icon="Search" link="/search" menuExplain="Ara">Ara</NavigationItem>
          <NavigationItem icon="SignUp" link="/sign-up" menuExplain="Üye olun">Üye ol</NavigationItem>
          <NavigationItem icon="Login" link="/login" menuExplain="Şimdi giriş yapın">Giriş yap</NavigationItem>
        </Aux>
      )
    }
  </ul>
);

export default navigationItems;