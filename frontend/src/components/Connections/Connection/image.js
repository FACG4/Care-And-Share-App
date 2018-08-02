import React from 'react';


const Image = ({
  openModel, name, id, src,
}) => (
  <div className="FrindesImage" onClick={() => openModel(id)}>
    <img src={src} alt="avata" />
    <h3>
      {name}
    </h3>
  </div>
);


export default Image;
