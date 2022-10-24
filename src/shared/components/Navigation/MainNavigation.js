import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NaviLink from "./NaviLink";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NaviLink />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to='/'>Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NaviLink />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation;