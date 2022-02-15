import React from 'react'
import './propos.css'
import bg from '../../../../images/bg.png';
const Propos = () => {
  return (
    <div className='propos'>
       <img src={bg} alt='bg'/>
       <div className='about'>
           <h4>-À propos</h4>
           <h1>Notre creativite est partout</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam nemo ab Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam porro voluptatibus? Dolor quaerat nulla repellat alias voluptatem quo facere fuga nesciunt amet, aspernatur voluptas, ullam illo. Accusantium, rem quaerat. </p>
           <button>Voir plus</button>
       </div>
    </div>
  )
}

export default Propos;