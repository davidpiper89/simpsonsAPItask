import React, { Component } from 'react';
import axios from 'axios';
import Quotes from './components/quotes';

class App extends Component {
  state = {} 

  async componentDidMount(){
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=5` ;
    const result = await axios.get(url)
    this.setState({listQuotes: result})
    
  }

  onInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addCharacter = () => {
   
    const copy = {...this.state};
    copy.listQuotes.data.push({"character" : this.state.addCharacter}) 
    this.setState({...copy})
  }

  removeCharacter = () => {

    const copy2 = {...this.state};
    copy2.listQuotes.data.pop()
    this.setState({...copy2})
  }


  render() { 
    

if (this.state.listQuotes) {
  const {data} = this.state.listQuotes
    return (
    <>
    <h1>Simpsons quotes</h1>
    <h2>Add Character: <input type="text" onInput={this.onInput} id="addCharacter"></input>
    <button onClick={this.addCharacter}>Add</button></h2>
    <Quotes data={data}/>
    <h2><button onClick={this.removeCharacter}>Remove</button></h2>
    </>
    );
}
return <h1> Loading </h1>;  
  }
}
 
export default App;