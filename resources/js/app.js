require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hunt from './components/hunt_app/Hunt';
import Navbar from './components/Navbar';
import AppTitle from './components/AppTitle';

ReactDOM.render(
    <Navbar/>, document.getElementById('app-bar')
);

ReactDOM.render(
    <AppTitle/>, document.getElementById('app-title')  
);

ReactDOM.render(
    <Hunt/>, document.getElementById('hunt')
);