import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {AboutPage} from './pages/AboutPage';
import {DonatePage} from './pages/DonatePage';
import {FaqPage} from './pages/FaqPage';
import {HomePage} from './pages/HomePage';
import {Main} from './pages/Main';

function App() {     
  return ( 
    <BrowserRouter>
      <Main >
        <Switch>
          <Route path = '/' exact component = {HomePage}/>
          <Route path = '/about' exact component = {AboutPage}/>
          <Route path = '/faq' exact component = {FaqPage}/>
          <Route path = '/donate' exact component = {DonatePage}/>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}    
  
export default App; 
