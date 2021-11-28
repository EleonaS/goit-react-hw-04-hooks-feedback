import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';


const FeedbackOptions=({
  buttons,
  onLeaveFeedback,
}) => {
  return (
    <div>
      {Object.keys(buttons).map(
        button => (
          <button
            key={button}
            type="button"
            className={s.btn}
            onClick={() => {
              onLeaveFeedback(button);
            }}
          >
            {button}
          </button>
        ),
      )}
    </div>
  );
}

FeedbackOptions.propTypes = {
 buttons: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
