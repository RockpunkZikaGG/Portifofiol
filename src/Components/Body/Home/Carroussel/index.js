import React from 'react';

import { Container } from './styles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import f1 from '../../../../Images/1.png';
import f2 from '../../../../Images/2.png';
import f3 from '../../../../Images/3.png';

const ar = [f1,f2,f3];

export default function Carroussel() {
  return (
    <Container>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        {ar.map(Fotos =><div className="Car" key={Fotos}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <img src= {Fotos} alt="..."/>
        </div>)}
      </Carousel>
    </Container>
  );
}
