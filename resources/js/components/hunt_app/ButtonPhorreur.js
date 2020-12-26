import React, { Component } from 'react';

export default class ButtonPhorreur extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onButtonPhorreurClick(this.props.value);
    }

    render(){
        return(
            <button onClick={this.handleChange} className="button-phorreur">
                {this.props.value}
            </button>
        );
    }

}