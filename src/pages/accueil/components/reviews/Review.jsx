import React from 'react'
import './review.css'
import avataaars from'../../../../images/avataaars.png'
import avataaars1 from '../../../../images/avataaars 1.png'
import avataaars2 from '../../../../images/avataaars 2.png'
import avataaars3 from '../../../../images/avataaars 3.png'
import avataaars4 from '../../../../images/avataaars 4.png'

const Review = () => {
  return (
    <div className='Review'>
        <h4>-Notre réputation</h4>
        <h1>Ce que nos clients disent de nous</h1>
        <div className='reputation'>
                   <div className='messages-wrapper'>
                       <div className='messages-slider'>
                           <div className='message-avatar-name'>
                               <div className='message'>
                               <p> <span>&lt;&lt;</span> <br /> Lorem ipsum dolor sit amet, <br /> consectetur amagnam expedita. <br /> Laborum, excepturi.
                                <br /> <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; </span></p> 
                               </div>
                               <img src={avataaars} alt="" className='avatar'/>
                               <p style={{fontWeight: 'bold', color: 'blue'}}>Karlee Burgess</p>
                           </div>
                           <div className='message-avatar-name'>
                               <div className='message'>
                               <p> <span>&lt;&lt;</span> <br /> Lorem ipsum dolor sit amet, <br /> consectetur amagnam expedita. <br /> Laborum, excepturi.
                                <br /> <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; </span></p> 
                               </div>
                               <img src={avataaars1} alt='' className='avatar'/>
                               <p style={{fontWeight:'bold' , color:'blue'}}>Alexander Doe</p>
                           </div>
                           <div className='message-avatar-name'>
                               <div className='message'>
                               <p> <span>&lt;&lt;</span> <br /> Lorem ipsum dolor sit amet, <br /> consectetur amagnam expedita. <br /> Laborum, excepturi.
                                <br /> <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; </span></p> 
                               </div>
                               <img src={avataaars2} alt='' className='avatar'/>
                               <p style={{fontWeight :'bold' , color:'blue'}}>John doe</p>
                           </div>
                           <div className='message-avatar-name'>
                               <div className='message'>
                                    <p> <span>&lt;&lt;</span> <br /> Lorem ipsum dolor sit amet, <br /> consectetur amagnam expedita. <br /> Laborum, excepturi.
                                    <br/> <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; </span></p> 
                               </div>
                               <img src={avataaars3} alt='' className='avatar'/>
                               <p style={{fontWeight:'bold' , color:'blue'}}>jason x</p>
                           </div>
                           <div className='message-avatar-name'>
                               <div className='message'>
                                <p> <span>&lt;&lt;</span> <br /> Lorem ipsum dolor sit amet, <br /> consectetur amagnam expedita. <br /> Laborum, excepturi.
                                 <br /> <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; </span></p> 
                               </div>
                               <img src={avataaars4} alt='' className='avatar'/>
                               <p style={{fontWeight:'bold' , color:'blue'}}>ghassen ben amor</p>
                           </div>
                       </div>
                       </div> 
            </div>
        </div>
  )
}

export default Review