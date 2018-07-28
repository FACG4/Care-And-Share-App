/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from 'react-modal';

const CarerCardBody = (props) => {
  const {
    isOpenValue, CarerCardBodyHide, id,
  } = props;
  let carer;
  if (props.response) {
    carer = props.response.filter(a => a.id === id)[0];
  }
  return (
    <Modal
      isOpen={isOpenValue}
      onRequestClose={CarerCardBodyHide}
      ariaHideApp={false}
    >
      <p>

Location:
        {' '}
        {
          carer && carer.location
}
      </p>
      <p>

Age:
        {' '}
        {
          carer && carer.age
}
      </p>
      <p>

Cared for sitution:
        {' '}
        {
          carer && carer.interests
}
      </p>
      <h1>
user Id:
        {' '}
        {id}
      </h1>
      <button type="submit" onClick={CarerCardBodyHide}>
Close
      </button>
      <button type="submit">
Add Request
      </button>
    </Modal>
  );
};

export default CarerCardBody;
