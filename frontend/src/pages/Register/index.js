import React from 'react';
import logoImg from '../../assets/logo.svg'

import './style.css';
export default function Register() {
    return(
      <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />

            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            
              </section>
            <form>

            </form>
        </div>
      </div>
    );
}