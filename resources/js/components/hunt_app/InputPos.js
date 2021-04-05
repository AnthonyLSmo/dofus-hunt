import React, { Component } from 'react';

export default class InputPos extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickIncr = this.handleClickIncr.bind(this);
    }

    handleChange(e){
        this.props.pos == 'x'
        ? this.props.onXposChange(e.target.value)
        : this.props.onYposChange(e.target.value)
    }

    handleClickIncr(e){
        let intPos = parseInt(this.props.value);
        e.target.name == 'btnPlus'
        ? this.props.pos == 'x'
          ? this.props.onXposChange(intPos + 1)
          : this.props.onYposChange(intPos + 1)
        : this.props.pos == 'x'
          ? this.props.onXposChange(intPos - 1)
          : this.props.onYposChange(intPos - 1)
    }

    render(){   
        return(
            <div className="inputpos-container">
                <div>
                    <input
                        type="number"
                        className="input-hunt"
                        placeholder={this.props.value}
                        value={this.props.value}
                        onChange={this.handleChange}
                        tabindex={this.props.tabIndex}
                    />
                </div>
                <div className="btnpos-container">
                    <button
                        className="btn-pos"
                        name="btnPlus"
                        onClick={this.handleClickIncr}
                    >
                        +
                    </button>
                    <button
                        className="btn-pos"
                        name="btnMinus"
                        onClick={this.handleClickIncr}
                    >
                        -
                    </button>
                </div>
            </div>
        );
    }
}