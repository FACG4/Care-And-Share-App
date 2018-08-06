import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import handleAuthentication from '../../../../helpers/handleAuthentication';

const FreindsRequestButton = (props) => {
  const { receiverId } = props;
  const { id: senderId } = handleAuthentication(sessionStorage.getItem('token'));
  return (
    <div>
      <button type="submit" onClick={() => props.handleFriendsRequest(senderId, receiverId, props.url)} >
        <FontAwesomeIcon className={props.icon} />
      </button>
    </div>
  );
};
FreindsRequestButton.propTypes = {
  receiverId: PropTypes.number.isRequired,
  handleFriendsRequest: PropTypes.func,
};
export default FreindsRequestButton;
