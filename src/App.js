import React from 'react';
import Card from './components/Cards/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import  fetchData  from './api';


class  App extends React.Component {
  async componentDidMount ()
  {
    const data = await fetchData();
    console.log (data);
  }
  render (){
  return (
    <div className={styles.container}>
      <Card />
      <CountryPicker />
      <Chart />
    </div>
  );
}
}

export default App;
