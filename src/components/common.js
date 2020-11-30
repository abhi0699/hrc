import React from 'react';
import { useHistory } from "react-router-dom";


export function Common(props) {

    const history = useHistory();
    var u_name = props.response.username;
    window.localStorage.setItem("username", u_name );
    function signInConfirm() {
        console.log("in siginconfirm");
        history.push('/dashboard');
        return null;
    }

    if(props.assigned)
    return (signInConfirm());
    else 
    return null;
}
