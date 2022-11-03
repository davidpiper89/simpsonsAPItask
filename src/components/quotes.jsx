import React, { Component } from 'react';
import Quote from './quote';
import Image from './image';
import Name from './name';
import Likes from './likes';

class Quotes extends Component {   
    state = {}
    render() { 
        return this.props.data.map(item => {
            
            return  (            
                <div key={item.quote} className="quote">
                <div><Name item={item}/></div>
                <div><Image item={item}/></div>
                <div><Quote item={item}/></div>
                <h2><button onClick={() => this.props.removeCharacter(item.quote)}>Remove</button></h2>
                <Likes item={item} key={item.quote} addLiked={this.props.addLiked} />
                
                       
                </div>
                
                
               
            );                    
        });
    }
}
 
export default Quotes ;
