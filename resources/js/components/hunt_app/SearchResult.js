import React, { Component } from 'react';

export default class SearchResult extends Component {
    constructor(props){
        super(props);
    }

    renderResult(){
        if(this.props.indice != "null" && this.props.indice != ""){
            return (<p>[ {this.props.xPos} ; {this.props.yPos} ] {this.props.indice}</p>)
        }
    }

    renderDirection(){
        if(this.props.indice != "null" && this.props.indice != ""){
            if(this.props.direction == "up"){
                return(<i className="fas fa-long-arrow-alt-up"></i>)
            } else if(this.props.direction == "right"){
                return(<i className="fas fa-long-arrow-alt-right"></i>)
            } else if(this.props.direction == "down"){
                return(<i className="fas fa-long-arrow-alt-down"></i>)
            } else if(this.props.direction == "left"){
                return(<i className="fas fa-long-arrow-alt-left"></i>)
            }
        }
    }

    render(){
        return (
            <div className="result-container">
                <div>{this.renderDirection()}</div>
                <div>{this.renderResult()}</div>
            </div>
        )
    }

}