import React from 'react';


const Image = props => (
  <div className="FrindesImage" onClick={props.openModel}>
    <img src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" alt="avata" id={props.id} />
    <h3>
      {props.name}
    </h3>
  </div>
);


export default Image;
