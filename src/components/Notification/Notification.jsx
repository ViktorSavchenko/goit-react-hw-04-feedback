import PropTypes from 'prop-types';
import './Notification.css'

function Notification({ message }) { 
  return (
    <h3 className="Notification-title">{message }</h3>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;