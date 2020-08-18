import React from 'react';
import Card from './components/Cards/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Card />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
