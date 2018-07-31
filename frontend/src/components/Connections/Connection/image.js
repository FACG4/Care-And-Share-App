import React from 'react';


const Image = ({ openModel, name }) => (
  <div className="FrindesImage" onClick={openModel}>
    <img src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" alt="avata" id={props.id} />
    <h3>
      {name}
    </h3>
  </div>
);


export default Image;
