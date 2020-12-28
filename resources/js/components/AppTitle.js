import React, { Component } from 'react';

export default class AppTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="hunt-title"><h1>Chasse au trésor</h1></div>
                <div className="hunt-link">
                    <a href="http://www.twitter.com/Smoyzi" className="hunt-icon" target='blank'>
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/Smoyz/themes" className="hunt-icon" target='blank'>
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href="#" className="hunt-icon discord-link">
                        <i className="fab fa-discord"></i>
                    </a>
                </div>
                <hr/>
            </div>
        )
    }
}