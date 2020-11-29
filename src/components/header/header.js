import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Logo from "../../images/logo.png";
import { H3C } from "../custom-styled-components";

const Header = (props) => {

  const history = useHistory();
  var x = props.onLogin;

  var logoHeader = {
    backgroundImage: `url(${Logo})`
  }
  function handleLogout() {
    history.push('/');
    window.localStorage.removeItem("username");
  }

  return (
    <div className="header-styles">
      <Grid container>
        <div className="col-3">
            <img src={Logo} alt="Logo" className="logo-style"/>
        </div>
        {x ? null : <div className="col-3" >
          <H3C>ABC PRODUCTS</H3C>
        </div>}
        {x ? null : <div className="col-3">
            <span className="header-span"> Hello, {window.localStorage.getItem("username")} </span>
        </div>}
        {x ? null : < div className="col-3">
          <span className="header-span" onClick={() => { handleLogout() }}>Logout</span>
        </div>}
      </Grid>
    </div >
  );
};

export default Header;
