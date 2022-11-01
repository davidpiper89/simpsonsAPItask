import React, { Component } from 'react';
import axios from 'axios';
import Quotes from './components/quotes';

class App extends Component {
  state = {} 

  async componentDidMount(){
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=50` ;
    const result = await axios.get(url)
    this.setState({listQuotes: result})
    
  }

  render() { 
if (this.state.listQuotes) {
  const {data} = this.state.listQuotes
    return (
    <>
    <h1>Simpsons quotes</h1>
    <Quotes data={data}/>
    </>
    );
}
return <h1> Loading </h1>;  
  }
}
 
export default App;