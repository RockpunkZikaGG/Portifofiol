import React from 'react';

import { Container } from './styles';
import img1 from '../../../Images/IFCODE.png';

const proj=[{id: 1, titulo: "IFCODE", descricao: "Participei fazendo o site, isso inclui desdo back-end até o front-end, porém o desing foi feito por meus colegas Allan e Gioavanna Bombardelli", img: img1}]

export default function Projetos() {
  return (
    <Container>
        {proj.map(p => (
          <div key={p.id} className="projeto">
            <img src={p.img} alt={p.img} className="img"/>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
            </div>
          </div>
        ))}
    </Container>
  );
}
