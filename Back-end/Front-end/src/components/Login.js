import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

export default function Login({ setToken }) {
    const [username, setUserName ] = useState('');
    const [password, setPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4003/session/login', {
                username,
                password,
            });

            if(response.data.token) {
                console.log('Usuario logeado:', response.data.token);
                setToken(response.data.token);
            } else {
                console.log('Error al logearse');
            }
        } catch (error) {
            console.error('Error al realizar la llamada de login:', error.message);
        }
};

return (
    <div className="login-wrapper">
        <h1 className="mb-5">Iniar session</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <div className="button-wrapper">
                <button className="btn btn-success" type="submit">
                    Enviar
                </button>
            </div>
        </form>
    </div>
);
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};