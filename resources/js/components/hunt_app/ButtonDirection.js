import React, { Component } from 'react';

export default class ButtonDirection extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(){
        this.props.onButtonDirectionClick(this.props.value);
    }

    renderValue(){
        if(this.props.value == 'left'){
            return (<i className="fas fa-long-arrow-alt-left"></i>);
        } else if (this.props.value == 'right'){
            return (<i className="fas fa-long-arrow-alt-right"></i>);
        } else if (this.props.value == 'up'){
            return (<i className="fas fa-long-arrow-alt-up"></i>);
        } else {
            return (<i className="fas fa-long-arrow-alt-down"></i>);
        }
    }

    classSelected(){
        if(this.props.value != this.props.selected){
            return 'button-hunt button-hunt-nselected';
        } else {
            return 'button-hunt button-hunt-selected';
        }
    }

    render(){
        return(
            <div className="btn-container">
                <button onClick={this.handleChange} className={this.classSelected()}>
                    {this.renderValue()}
                </button>
            </div>
        );
    }
}