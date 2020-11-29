import React from 'react';
import { useHistory } from "react-router-dom";


export function Common(props) {

    const history = useHistory();

    function signInConfirm() {
        history.push('/dashboard');
        return null;
    }

    if(props.value)
    return (signInConfirm());
    else 
    return null;
}
