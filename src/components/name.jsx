import React, { Component } from 'react';

class Name extends Component {
    
    render() { 
        console.log(this.props.item);
        return (<>    
            {this.props.item.character}
            </>  );
    }
}
 
export default Name;