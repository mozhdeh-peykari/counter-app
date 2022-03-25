import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters'
import Navbar from './components/navbar';


class App extends Component {

  constructor(){
    super();
    console.log("App - Constructor");
  }

  componentDidMount(){
    //Ajax calls
    console.log("App - Mounted");
  }

  state= {
    counters: [
        {id: 1, value : 4},
        {id: 2, value : 0},
        {id: 3, value : 0},
        {id: 4, value : 0}]
};

handleIncrement = counter => {
 
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   counters[index].value++;
   this.setState({counters});
};

handleDecrement = counter => {
 
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  if(counters[index].value > 0) {
    counters[index].value--;
    this.setState({counters});
  }
};

handleDelete = counterId => {
    console.log("delete clicked", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};

handleReset = () => {
    console.log("reset clicked");
    const counters = this.state.counters.map(c => {c.value = 0; return c;});
    this.setState({counters});
};

render(){
  console.log("App - Rendered");
  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className='container'>
        <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters = {this.state.counters}>
        </Counters>
      </main>
    </React.Fragment>
  );
}
}

export default App;
