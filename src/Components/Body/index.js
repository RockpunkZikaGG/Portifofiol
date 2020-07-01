import React from 'react';

import { Container } from './styles';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Projetos from './Projetos';

export default function Body() {
  return (
    <Container>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Projetos" component={Projetos}/>
      </Switch>
    </Container>
  );
}
