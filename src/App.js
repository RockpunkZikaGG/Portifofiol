import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <Header/>
      <Body/>
      <GlobalStyles/>
    </Router>
  );
}

export default App;