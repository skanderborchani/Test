import React from 'react'
import './reference.css';
import { useState } from 'react';
import tick from '../../../../images/tick.PNG'
import t from '../../../../images/t.png'
import m from '../../../../images/m.png'
import pc from '../../../../images/pc.png'
import u from '../../../../images/u.png'
import tab from '../../../../images/tab.png'
const Reference = () => {
  const [clicked, setClicked] = useState("tout")
  return (
    <div className='reference'>
        <h4>-Nos references</h4> 
        <div className='nav'>
          <button onClick={() => setClicked("tout")}>Tout</button>
          <button onClick={() => setClicked("Mobile")}>Mobile</button>
          <button onClick={() => setClicked("Web")}>Web</button>
          <button onClick={()=> setClicked("UI")}>UI/UX</button>
          <button onClick={() => setClicked("ERP")}>ERP/CRM</button>
        </div>
        <div className='PlaceHolder'>
          {clicked =="tout"&&
              <div className='pi'> 
                  <div className='t'>
                         <h1>Toutes nos références</h1>
                         <div className='p'>
                         <img src={tick} alt='' className='tick'/>
                         <p>Lorem ipsum dolor sit, amet </p>
                          </div> 
                          <div className='p'>
                          <img src={tick} alt='' className='tick'/>
                          <p>Lorem ipsum dolor sit, amet </p>   
                          </div>            
                    </div>
                    <img src={t} alt='' className='i'/>
              </div>
          }
          {clicked =='Mobile'&&
                    <div className='pi'>
                            <div className='t'>
                                  <h1>Applications mobiles natifs</h1>
                                  <div className='p'>
                                      <img src={tick} alt='' className='tick'/> 
                                      <p>Lorem ipsum dolor sit, amet </p>
                                  </div>
                                  <div className='p'>
                                      <img src={tick} alt='' className='tick'/> 
                                      <p>Lorem ipsum dolor sit, amet </p>
                                  </div>
                                  <div className='p'>
                                      <img src={tick} alt='' className='tick'/>
                                      <p>Lorem ipsum dolor sit, amet </p> 
                                  </div>
                            </div>
                            <img src={m} alt='' className='i'/>
                    </div>
          }
          {clicked == "Web" &&
                  <div className='pi'>
                        <div className='t'>
                              <h1>Développement web sur messure </h1>
                              <div className='p'>
                                    <img src={tick} alt='' className='tick'/> 
                                    <p>Lorem ipsum dolor sit, amet </p>  
                              </div>
                              <div className='p'>
                                   <img src={tick} alt='' className='tick'/>
                                   <p>Lorem ipsum dolor sit, amet </p>
                              </div>
                        </div>
                        <img src={pc} alt='' className='i'/>
              </div>
          }
          {clicked=="UI" &&
                              <div className='pi'>
                                  <div className='t'>
                                        <h1>UX/UI</h1>
                                        <div className='p'>
                                            <img src={tick} alt="" className='tick' />
                                            <p>Lorem ipsum dolor sit, amet </p>
                                        </div>
                                        <div className='p'>
                                              <img src={tick} alt="" className='tick' />
                                              <p>Lorem ipsum dolor sit, amet </p>
                                        </div>
                                        <div className='p'>
                                              <img src={tick} alt="" className='tick' />
                                              <p>Lorem ipsum dolor sit, amet </p>
                                        </div>
                                  </div>
                                  <img src={u} alt="" className='i' />
                              </div>
          }
          {clicked=="ERP" &&
                      <div className='pi'>
                              <div className='t'>
                                    <h1>Logiciels ERP/CRP</h1>
                                    <div className='p'>
                                        <img src={tick} alt="" className='tick' />
                                        <p>Lorem ipsum dolor sit, amet </p>
                                    </div>
                                    <div className='p'>
                                         <img src={tick} alt="" className='tick' />
                                         <p>Lorem ipsum dolor sit, amet </p>
                                    </div>
                                    <div className='p'>
                                          <img src={tick} alt="" className='tick' />
                                         <p>Lorem ipsum dolor sit, amet </p>
                                    </div>
                                </div>
                              <img src={tab} alt='' className='i'/>
                        </div>
          }
        </div>

      </div>

  )
}

export default Reference