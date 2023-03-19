import PropTypes from 'prop-types';
import './Section.css'

function Section({ title, children }) { 
  return (
  <div className="Feedback-section Feedback">
      <h1  className="Feedback-title">{title}</h1>
      { children }
  </div>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;