import React from 'react'
import './reference.css';
import { useState } from 'react';
import tick from '../../../../images/tick.PNG'
import t from '../../../../images/t.png'
import m from '../../../../images/m.png'
import pc from '../../../../images/pc.png'
import u from '../../../../images/u.png'
const [clicked, setClicked] = useState("tout")
const Reference = () => {
  return (
    <div className='reference'>
        <h4>-Nos references</h4> 
        <div className='nav'>
          <button onClick={() => setClicked("tout")}>Tout</button>
          <button onClick={() => setClicked("Mobile")}>Mobile</button>
          <button onClick={() => setClicked("Web")}>Web</button>
          <button>UI/UX</button>
          <button>ERP/CRM</button>
        </div>

      </div>

  )
}

export default Reference