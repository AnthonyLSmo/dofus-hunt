import React, { Component } from 'react';

export default class SelectIndice extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.props.onSelectChange(e.target.value);
    }

    phorreur(){
        if(this.props.direction != 'null'){
            return <option key="-2">Phorreur</option>
        } 
    }

    renderIndices(){
        return this.props.listIndice.map(indice => {
            return(
                <option key={indice.nom_indice}>
                    {indice.nom_indice}
                </option>
            );
        })
    }

    render(){
        if(this.props.loading == true){
            return(
                <select onChange={this.handleChange} className="select-hunt" disabled multiple>
                    <option>Loading...</option>
                </select>
            );
        } else {
            return(
                <select onChange={this.handleChange} className="select-hunt" multiple>
                    {this.props.children}
                    {this.phorreur()}
                    {this.renderIndices()}
                </select>
            );
        }
        
    }

}