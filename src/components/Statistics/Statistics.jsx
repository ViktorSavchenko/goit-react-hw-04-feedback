import PropTypes from 'prop-types';
import './Statistics.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) { 
  return (
    <ul className="Statistics-list">
        <li  className="Statistics-item">
          <span>Good:&nbsp;</span>
          <span>{good}</span>
        </li>
        
        <li  className="Statistics-item">
          <span>Neutral:&nbsp;</span>
          <span>{neutral}</span>
        </li>
        
        <li  className="Statistics-item">
          <span>Bad:&nbsp;</span>
          <span>{bad}</span>
        </li>
        
        <li className="Statistics-item">
          <span>Total:&nbsp;</span>
          <span>{total}</span>
        </li>
        
        <li className="Statistics-item">
          <span>Positive feedback:&nbsp;</span>
          <span>{Number(positivePercentage) ? positivePercentage : 0}%</span>
        </li>
      </ul>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;