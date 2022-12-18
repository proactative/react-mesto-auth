import React from "react";
import { Link, withRouter } from 'react-router-dom';

function Login({handleHeaderLink}) {

    // React.useEffect(() => {
    //     handleHeaderLink({ route: "/sign-up", name: "Регистрация3333" });
    // }, []);

    return (
        <section className='login'>
            <h2 className='login__title'>Вход</h2>
            <form className='login__form'>
                <input className='login__input' type='email' name='email' id='email' required placeholder='Email' /* value="" onChange={handleChange} */></input>
                <input className='login__input' type='email' name='email' id='email' required placeholder='Пароль' /* value="" onChange={handleChange} */></input>
                <button className='login__button' type='submit' /*onSubmit='handleSubmit'*/>Войти</button>
            </form>
        </section>
    )
}


export default withRouter(Login);
