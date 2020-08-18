import React from 'react';
import Card from './components/Cards/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import  fetchData  from './api';


class  App extends React.Component {
  state= {
    data : {}
  }
  async componentDidMount ()
  {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  render (){
  return (
    <div className={styles.container}>
      <Card data={this.state.data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}
}

export default App;
