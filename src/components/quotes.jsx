import React, { Component } from 'react';
import Quote from './quote';
import Image from './image';
import Name from './name';

class Quotes extends Component {   
    render() { 
        return this.props.data.map(item => {
            return  (            
                <div key={item.quote} className="quote">
                <Name item={item}/>
                <Image item={item}/>
                <Quote item={item}/>
                </div>
                
               
            );                    
        });
    }
}
 
export default Quotes ;