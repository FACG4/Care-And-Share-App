/* eslint-disable react/jsx-filename-extension */

import React from 'react';

const Carer = props => (
  <div>

    {props.response && props.response.map(carer => (
      <div className="carer-card" key={carer.id} onClick={() => props.CarerCardBodyShow(carer.id)}>
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
        <h5>
Cared for sitution:
          {' '}
          {carer.interests}
        </h5>
        <button type="submit" key={carer.id}>
          more
        </button>
      </div>
    ))}
  </div>
);

export default Carer;
