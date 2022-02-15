import React from 'react'
import './methode.css'
import cercle from '../../../../images/circles.png'
const Methode = () => {
  return (
    <div className='methode'>
        <div className='title'>
            <h4>-Notre méthode</h4>
            <h1>Comment nous procédons</h1>
        </div>
        <img src={cercle} alt='cercle' />
        <div className='text1'>
            <p><span>1-</span>CONTACT:</p>
            <p>Lorem ipsum dolor sit amet, consehghfdj</p>
        </div>
        <div className='text2'>
            <p><span>2-</span> ESTIMATION:</p>
            <p>Lorem ipsum dolor sit amet consectetur .<br/> Deserunt, nostrum aliquid </p>
        </div>
        <div className='text3'>
            <p><span>3.</span>RECHERCHE:</p>
            <p>Lorem ipsum dolor sit amet consectetur<br/> Quisquam, aspernatur</p>
        </div>
        <div className='text4'>
            <p><span>4-</span>Production:</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Eaque tempora tempori</p>
        </div>
    </div>
  )
}

export default Methode