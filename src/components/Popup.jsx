import React from 'react'
import { MdClose } from 'react-icons/md';
import './Popup.css'
function Popup(props) {
  return (props.trigger)?(

    <div className='popup'>
      <div className="popup-inner">
        <h2 className='font-bold text-[15px]'>Arabic Recitation</h2>
        <span  className='close-btn ' onClick={()=>{props.setTrigger(false)}} ><MdClose/></span>
        {props.children}
       
      </div>
    </div>
    
  ):""
}

export default Popup