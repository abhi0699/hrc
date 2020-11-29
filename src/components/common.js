import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


export function Common(props) {

    const history = useHistory();

    function formNamesHandler() {
        //e.preventDefault();
        history.push('/dashboard');
        return null;
    }

    if(props.assigned)
    return (formNamesHandler());
    else 
    return null;
}