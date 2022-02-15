import React from 'react';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Propos from './components/propos/Propos'
import Methode from './components/methode/Methode';
import Reference from './components/Reference/Reference';
import Societe from './components/societe/Societe';
import Review from './components/reviews/Review';

const Accueil = () => {
  return <div>
      <Intro/>
      <Services/>
      <Propos/>
      <Methode/>
      <Reference/>
      <Societe/>
      <Review/>
  </div>;
};

export default Accueil;
