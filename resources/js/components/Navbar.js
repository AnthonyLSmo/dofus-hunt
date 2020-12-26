import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid navbar">
                <div className="d-flex col-6 justify-content-start">
                    <div className="p-0 brand-link">
                        <a href="#" className="brand-link">dofus-hunt</a>
                    </div>
                </div>
                <div className="d-flex col-6 justify-content-end">
                    <div className="p-0 first-link"><a href="#">Hunt</a></div>
                    <div className="p-0 other-link"><a href="#soon">Thèmes</a></div>
                </div> 
            </div>
            
        )
    }
}
