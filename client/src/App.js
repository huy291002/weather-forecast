import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Settings from './pages/Settings';
export default function App() {
  //render() {
    return (
      <div className="Home">
        <Router>
            <Routes>
              <Route path ="/" element ={<Home/ > } />
              <Route path ="/weather" element ={<Weather/ >} />
              <Route path ="/settings" element ={<Settings/ >} />
            </Routes>
        </Router>
      </div>
    );
  }



