import React from 'react';
import { Container } from './styles';
import {Link} from 'react-router-dom';
import {slide as SideNav} from 'react-burger-menu'

export default function Header() {
  return (
    <Container>
        <nav>
            <SideNav className="SideNav">
                <Link to="/Projetos ">Projetos</Link>
                <Link to="/Lazer">Lazer</Link>
                <Link to="/PlanosFuturos">Planos Futuros</Link>
            </SideNav>
            <div className="staticMenu">
              <Link to="/Home">Home</Link>
              <Link to="/Contatos">Contatos</Link>
              <Link to="/Linguagens">Linguagens</Link>
              <Link to="/Escolaridade">Escolaridade</Link>
            </div>
        </nav>
        <div className="Logo">
          <h1>WRS</h1>
          <p>William Rocha Silva</p>
        </div>
    </Container>
  );
}
