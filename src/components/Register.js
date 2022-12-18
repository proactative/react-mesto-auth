import React from "react";
import { Link, withRouter } from 'react-router-dom';

function Register({handleHeaderLink}) {

    // React.useEffect(() => {
    //     handleHeaderLink({ route: "/sign-in", name: "Вход44444" });
    // }, []);

    return (
        <section className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form">
                <input className="register__input" type='email' name="email" id="email" required placeholder="Email" /* value="" onChange={handleChange} */></input>
                <input className="register__input" type='email' name="email" id="email" required placeholder="Пароль" /* value="" onChange={handleChange} */></input>
                <button className='register__button' type="submit" /*onSubmit='handleSubmit'*/>Зарегистрироваться</button>
            </form>
            <p className="register__login-question">Уже зарегистрированы?{' '}
                <Link to="/sign-in" className="register__login-link">Войти</Link>
            </p>
        </section>

    )
}


export default withRouter(Register);
