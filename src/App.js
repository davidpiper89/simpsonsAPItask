import React, { Component } from 'react';
import axios from 'axios';
import Quotes from './components/quotes';
import './App.css';


class App extends Component {
  state = {}
  
  

  async componentDidMount(){
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=5` ;
    const result = await axios.get(url)
    this.setState({listQuotes: result})
    
    
  }

  onInput = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
    
  };

  addCharacter = () => {

    const indexOf = this.state.listQuotes.data.findIndex((item) => item.quote === this.state.quote);
    console.log(indexOf);

    if(indexOf > -1) {
      return;
    }
   
    const copy = {...this.state};
    copy.listQuotes.data.unshift({
      quote : this.state.quote,
      character : this.state.character, 
      image : "",      
      characerDirection : "Left"}) 
    this.setState({...copy})
   
  }


  addLiked = (quote) => {
   
    const indexOf = this.state.listQuotes.data.findIndex((index) => index.quote === quote)
    
    const copy = {...this.state}
    copy.listQuotes.data[indexOf].liked = !copy.listQuotes.data[indexOf].liked
    this.setState({...copy})
  }

  removeCharacter = (quote) => {
    const indexOf = this.state.listQuotes.data.findIndex(item => {return item.quote ===quote})
    const copy = {...this.state};
    copy.listQuotes.data.splice(indexOf, 1)
    this.setState({...copy})
  }

 
   
  


  render() { 
    
 
    
    
    
  if (this.state.listQuotes) {
  let {data} = this.state.listQuotes

  let total = 0;
  data.forEach(item => {
     if (item.liked) total +=1
    })


  if (this.state.search) {
    data = data.filter((item) => {
      return item.character.toLowerCase().includes(this.state.search.toLowerCase().trim());
    });
  }

    return (
    <>
    <h1>Simpsons quotes</h1>
    <p>Total No. of Likes: {total}</p>
    <h2 onInput={this.onInput}>Add Character: 
    <input type="text"  name="character"></input>
    and quote:
    <input type="text"  name="quote"></input>
    <button onClick={this.addCharacter}>Add</button></h2>

    <h2 onInput={this.onInput}>Search: <input type="text" name ="search"></input></h2>
  
    <Quotes removeCharacter={this.removeCharacter} data={data} addLiked={this.addLiked}/>

    </>
    );
}
return <h1> Loading </h1>;  
  }
}
 
export default App;