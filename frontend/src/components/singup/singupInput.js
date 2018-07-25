import React from 'react';

import './style.css';

const Input = (props) =>{

  
  return (
    <div className="row">
        
         <i className={props.icon} ></i><input type={props.type} placeholder={props.placeholder} name={props.name}/>
  
    </div>
  );
}





export default Input ;