import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import GoogleLoginComp from '../Google/googleLogin';
import './loginDiv.scss';
import axios from 'axios';

function LoginDiv() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await axios
            .post('http://localhost:8080/api/auth/login', values, {
                withCredentials: true,
            })
            .catch((err) => console.log(err));

        if (result) {
            if (result.data.success) window.location.reload();
        }
        console.log(result);
    };

    return (
        <div className="loginDiv">
            <Button onClick={handleToggle}>Sign In</Button>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
            >
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <div className="closeDiv">
                                <CloseIcon
                                    onClick={handleClose}
                                    className="close"
                                />
                            </div>
                            <form className="login">
                                <div className="login__field">
                                    <input
                                        type="text"
                                        className="login__input"
                                        placeholder="User name / Email"
                                        value={values.username}
                                        onChange={handleChange('username')}
                                    />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input
                                        type="password"
                                        className="login__input"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                    />
                                </div>
                                <button className="button login__submit">
                                    <span
                                        className="button__text"
                                        onClick={handleSubmit}
                                    >
                                        Log In Now
                                    </span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <Divider
                                orientation="horizontal"
                                flexItem
                                className="divider"
                            >
                                Or
                            </Divider>
                            <div className="google-div">
                                <GoogleLoginComp />
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}

export default LoginDiv;
