import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import AvatarImg from '../../Avatar/Avatarimg';
import Aux from '../../../hoc/Aux/Aux';

const displayMenuOnSideDrawer = (
  <Aux>
    <NavigationItem icon="History" link="/yolculuklarim" menuExplain="Yolculuklarınızı inceleyin">Yolculuklarım</NavigationItem>
    <NavigationItem icon="Cash" link="/odemeler-ve-iadeler" menuExplain="Ödeme bilgileriniz">Ödeme ve İadeler</NavigationItem>
    <NavigationItem icon="Message" link="/bildirimler" menuExplain="Mesaj ve bildirimleriniz">Bildirimler</NavigationItem>
  </Aux>
);

const navigationItems = (props) => (

  <ul className={classes.NavigationItems}>
    {props.isAuthenticated
      ? (
        <Aux>
          {!props.sideDrawer ? <AvatarImg /> : null}
          <NavigationItem icon="Profile" link="/profile" menuExplain="Profil sayfana git">Profilim</NavigationItem>
          <NavigationItem icon="Add" link="/yoldas/ilan-ver" menuExplain="Şimdi yolculuk ilan ver">Yolculuk İlanı ver</NavigationItem>
          <NavigationItem icon="Search" link="/yoldas/seyahat-arkadasi-ara" menuExplain="Seyahat arkadaş ara">Yoldaş ara</NavigationItem>
          {props.sideDrawer ? displayMenuOnSideDrawer : null}
          <NavigationItem icon="Exit" link="/logout" menuExplain="Güvenli çıkış">Çıkış</NavigationItem>
        </Aux>
      )
      : (
        <Aux>
          <NavigationItem icon="Add" link="/yoldas/ilan-ver" menuExplain="Şimdi yolculuk ilan ver">Yolculuk İlanı ver</NavigationItem>
          <NavigationItem icon="Search" link="/yoldas/seyahat-arkadasi-ara" menuExplain="Seyahat arkadaş ara">Yoldaş ara</NavigationItem>
          <NavigationItem icon="SignUp" link="/sign-up" menuExplain="Şimdi üye olun">Üye ol</NavigationItem>
          <NavigationItem icon="Login" link="/login-yoldas" menuExplain="Şimdi giriş yapın">Giriş yap</NavigationItem>
        </Aux>
      )
    }
  </ul>
);

export default navigationItems;