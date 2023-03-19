import {useState} from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0); 
  
  const appState = { good, neutral, bad };
  
  const countTotalFeedback = option => {
    switch (option) { 
      case 'good':
        return setGood(good + 1);      
      case 'neutral':
        return setNeutral(neutral + 1);      
      case 'bad':
        return setBad(bad + 1);
      default:
        return;
    }
  };
  
  const countTotal = () => ( 
    Object.values(appState).reduce((acc, value) => (acc + value), 0)
  );  
  
  const countPositiveFeedbackPercentage = () => {
    return (appState.good/countTotal())*100
  };   
  
  let positivePercentage = Math.round(countPositiveFeedbackPercentage());
  let totalFeedback = countTotal();  
     
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={countTotalFeedback} />
      </Section>
        
      <Section title="Statistics">
        {totalFeedback === 0 ?
          (<Notification message="There aren`t any feedback!" />) :
          (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />)}
      </Section>
    </>
  ); 
};


export default App;
