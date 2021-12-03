import './App.css';
//import React from 'react';
import { useState } from 'react';
import Section from './component/Section/Section';
import Statistics from './component/Statistics/Statistics';
import Notification from './component/Notification/Notification';
import FeedbackOptions from './component/FeedbackOptions/FeedbackOptions';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] =
    useState(0);
  const [bad, setBad] = useState(0);

  const buttons = {
    good,
    neutral,
    bad,
  };

  /*handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };*/

  const handleIncrement = name => {
    switch (name) {
      case 'good':
        setGood(
          prevState => prevState + 1,
        );
        break;
      case 'neutral':
        setNeutral(
          prevState => prevState + 1,
        );
        break;
      case 'bad':
        setBad(
          prevState => prevState + 1,
        );
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const feedbacksValues =
      Object.values(buttons);
    return feedbacksValues.reduce(
      (total, value) => total + value,
      0,
    );
  };

  const countPositiveFeedbackPercentage =
    () => {
      const total =
        countTotalFeedback();

      return total > 0
        ? Math.round(
            (good / total) * 100,
          )
        : 0;
    };

  const totalFeedback =
    countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttons={buttons}
          onLeaveFeedback={
            handleIncrement
          }
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countPositiveFeedbackPercentage()
                ? countPositiveFeedbackPercentage()
                : 0
            }
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

export default App;
