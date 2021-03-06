import React from 'react';
import { Link} from 'react-router-dom';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    return (
    <div className="logon-container">
        <section className="class form">
            <img src={logoImg} alt="Be the hero" />

            <form>
                <h1>Faça seu Logon</h1>

                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>


                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#e02041"/>
                    Não tenho cadastro
                </Link>
            </form>

        </section>
      <img src={heroesImg} alt="HeroesImg" />
    </div>
    );
}

