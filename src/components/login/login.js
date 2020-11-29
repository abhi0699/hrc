import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './login.css'
import axios from 'axios';
import Background from "../../images/background.png";
import { useHistory } from "react-router-dom";
import Header from "../header/header";


function LoginComponent(props) {
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const history = useHistory();
    const [onLogin, setOnLogin] = useState(true);
    const [value, setValue] = useState(true);

    var sectionStyle = {
        width: "auto",
        height: "400px",
        backgroundImage: `url(${Background})`,
    };

    
    function handleChange(e) {
        if (e.target.id === "username") {
            setUsername(e.target.value)
        }
        else if (e.target.id === "password") {
            setPassword(e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (userName === '' || password === '') {
            setError(true);
            history.push('/error')
            setHelperText("Please enter All Fields")
        }

       
        const headers = {
            'Content-Type': 'application/json',
            'responseType': 'json',
            'Accept': 'application/json',
            'observe': 'body'
        }

        axios.post('http://localhost:62643/api/Authentication/'+ userName, JSON.stringify(password),
            { headers: headers }).then(res => console.log(res))
            .then(assign => setOnLogin(true))
            .then(x=>setValue(true))
            .catch(err => alert("Invalid Credentials, Try Again!"));
        
        history.push('/dashboard');
        window.localStorage.setItem("username", userName);
        setError(false);
    };

    return (
        <React.Fragment>
            <Header onLogin={onLogin}/>
            <Grid container>
                <div className="row">
                    <div className="col-12 ">
                        <section style={sectionStyle} className="background">
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"></div>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="loginDiv">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <p>Sign In</p>
                            <TextField
                                className="loginText" id="username" value={userName}
                                onChange={(e) => { handleChange(e) }} placeholder="UserName" autoComplete='off' required />
                            <TextField
                                className="loginText" id="password" value={password}
                                onChange={(e) => { handleChange(e) }} placeholder="Password" type="password" required />
                            {error ? <p style={{ fontSize: "12px", color: "red", marginTop: "20px" }}>{helperText}</p> : null}
                            <p>
                                <Button type="submit" variant="contained" color="primary">Sign In</Button>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-4"></div>
            </Grid>
        </React.Fragment>
    )
}
export default LoginComponent;