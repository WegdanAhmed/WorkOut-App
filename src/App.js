import { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {Routes,Route} from 'react-router-dom';
export default class App extends Component{
    render(){
        return<>
    <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/home' Component={Home}/>
    </Routes>
        </>
    }
}