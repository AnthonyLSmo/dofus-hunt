import React, { Component } from 'react';

export default class InputPos extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.pos == 'x'
        ? this.props.onXposChange(e.target.value)
        : this.props.onYposChange(e.target.value)
    }

    render(){   
        return(
            <input
                type="number"
                className="input-hunt"
                placeholder={this.props.value}
                value={this.props.value}
                onChange={this.handleChange}
            />
        );
    }
}