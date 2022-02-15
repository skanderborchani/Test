import React from 'react'
import './societe.css'
import mark1 from '../../../../images/mark1.png'
import mark2 from '../../../../images/mark2.png'
import mark3 from '../../../../images/mark3.png'
import mark4 from '../../../../images/mark4.png'
import mark5 from '../../../../images/mark5.png'
import mark6 from '../../../../images/mark6.png'


const Societe = () => {
  return (
    <div className='societe'>
        <div className='para'>
            <p>ils nous ont fait<br/> confiance ...</p>
        </div>
    <div className='imageS'>
        <img src={mark1} alt='mark1' />
        <img src={mark2} alt='mark2' />
        <img src={mark3} alt='mark3' />
        <img src={mark4} alt='mark4' />
        <img src={mark5} alt='mark5' />
        <img src={mark6} alt='mark6' />
        <img src={mark1} alt='mark7'/>
        <img src={mark2} alt='mark8'/>
    </div>
    </div>
  )
}

export default Societe