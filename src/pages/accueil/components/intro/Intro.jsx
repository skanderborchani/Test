import React from 'react';
import './intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import intro from '../../../../images/intro.png';
const Intro = () => {
  return (
      <div className='Intro'>
        <div className='conteneur'>
          <div className='txt'>
          <h1>Devenez le meilleur <br/>version digitale<br/>de vous-meme</h1>
          <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Voluptatu</p>
            <div className='play'>
                <button className='btn'>C'est parti</button>
                <div className='video'>
                    <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
                    <p>Play video</p>
                 </div>
            </div>
            </div>
        </div>
        <img src={intro} alt="intro" className='i'/>
      </div>
  );
};

export default Intro;
