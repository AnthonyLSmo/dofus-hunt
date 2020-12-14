import { forInRight } from 'lodash';
import React, { Component } from 'react';
import ButtonPhorreur from './ButtonPhorreur';

export default class ButtonList extends Component {
    constructor(props){
        super(props);
        this.handleButtonPhorreur = this.handleButtonPhorreur.bind(this);
    }

    handleButtonPhorreur(e){
        this.props.onChange(e);
    }

    buttonList(){
        const arrayButton = [];
        for(let i = 1; i <= 10; i++){
            arrayButton[i] = i;
        }
        if(this.props.indice == 'Phorreur'){
            return arrayButton.map(button => {
                return(
                    <ButtonPhorreur 
                        key={button}
                        value={button}
                        onButtonPhorreurClick={this.handleButtonPhorreur}
                    />
                );
            })
        }
    }

    render(){
        return(
            <div className="phorreur-block">
                {this.buttonList()}
            </div>
        )
    }

}