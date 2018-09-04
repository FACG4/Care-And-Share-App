import React from 'react';

const Image = ({
  openModel, name, id, src,
}) => (
  <div className="FrindesImage" onClick={() => openModel(id)}>
    <img className="image-style" src={src} alt="avata" />
    <h4 className="frined--style">
      {name}
    </h4>
  </div>
);


export default Image;
