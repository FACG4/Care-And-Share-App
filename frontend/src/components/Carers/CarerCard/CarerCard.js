/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './style.css';

const Carer = (props) => {
  const { response } = props;
  return (
    <div className="carersCards">

      {response && response.map(carer => (
        <div className="carer-card" key={carer.id} onClick={() => props.CarerCardBodyShow(carer.id)}>
          <div className="carer-card-info">
            <h5>
Carer from:
              {' '}
              {carer.location}
            </h5>
            <h5>
Age:
              {' '}
              {carer.age}
            </h5>
            <p>
              <span className="span-bold">
Cared for sitution:
              </span>
              {' '}
              <span className="span-normal">
                {carer.sitution}
              </span>
            </p>
          </div>
          <button className="more-button" type="submit" key={carer.id}>
          more
          </button>
        </div>
      ))}
    </div>
  );
};

export default Carer;
