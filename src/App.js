import React from 'react';
import CountDown from './components/CountDown'
import './App.css';

const App = (props) => {

  const { Title, Subtitle, TimeData } = props;

  return (
    <div className="App">
      <CountDown 
        Title = { Title } 
        Subtitle = { Subtitle } 
        TimeData = { TimeData }
      />
    </div>
  );
}

App.defaultProps = {
  Title: 'BLACK FRIDAY',
  Subtitle: "KitchenAid",
  TimeData: [
    {className: 'day', timeType: 'Dias' },
    {className: 'hour', timeType: 'Horas' },
    {className: 'minute', timeType: 'Minutos' },
    {className: 'second', timeType: 'Segundos' }
  ]
}

export default App;
