import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';
import Carroussel from './Carroussel';

import Eu from '../../../Images/Eu.png';

export default function Home() {
  return (
    <Container>
      <img src={Eu} alt="Eu" className='FotoPerfil'/>
      <div className="infos">
        <h1 className="Ola">Olá,</h1>
        <h2>um pouco sobre mim:</h2>
        <div className="sobre">
          <Link to="Projetos" className="sobrePages projetos">
            <p>Projetos</p>
          </Link>
          <Link to="Lazer" className="sobrePages lazer">
            <p>Lazer</p>
          </Link>
          <Link to="PlanosFuturos" className="sobrePages planosFuturos">
            <p>Planos Futuros</p>
          </Link>
        </div> 
      </div>
    </Container>
  );
}
