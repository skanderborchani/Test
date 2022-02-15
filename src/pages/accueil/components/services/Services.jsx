import React from 'react';
import './service.css';
import computer from '../../../../images/computer.png';
import smartphone from '../../../../images/smartphone.png';
import regle from '../../../../images/regle.png'
import centre from '../../../../images/centre.PNG'
import maintenance from '../../../../images/maintenance.PNG'
import erp from '../../../../images/erp.png'
const Services = () => {
  return (
    <div className='Services'>
        <div className='titre'>
            <h1>Quels services nous fournissons </h1>
            <p>Nous nous engageons à fournir à nos clients tous en offrant à nos employés la meilleur formation  </p>
        </div>
        <div className='c'>
            <div className='Partie'>
                <div className='block'>
                    <div className='text'>
                        <h3>DÉVELOPPEMENT WEB SPÉCIFIQUE</h3>
                        <p>Lorem ipsum dolor sit amet,consectutur quam</p>
                        <h3>DÉVELOPPEMENT MOBILE</h3>
                        <p>Lorem ipsum dolor sit amet,consectutur quam</p>
                        <h3>DESIGN GRAPHIQUE</h3>
                        <p>Lorem ipsum dolor sit amet,consectutur quam</p>
                    </div>
                    <div className='im'>
                        <img src={computer} alt='web'/>
                        <img src={smartphone} alt='mobile'/>
                        <img src={regle} alt='regle'/>
                    </div>
                </div>
            </div>
            <div className='centre'>
                <img src={centre} alt='centre'/>
            </div>
            <div className='partie'>
            <div className='block'>
                    <div className='im'>
                        <img src={maintenance} alt='maintenance'/>
                        <img src={erp} alt='erp'/>
                    </div>
                    
                            <div className='text'>
                                    <h3>MAINTENANCE</h3>
                                    <p>Lorem ipsum dolor sit amet,consectutur quam</p>
                                    <h3>ERP/CRP</h3>
                                    <p>Lorem ipsum dolor sit amet,consectutur quam</p>
                            </div>
                     </div>
                 </div>
                </div>
        
    </div>
  )
}

export default Services