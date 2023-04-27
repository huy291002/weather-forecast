//import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
import { useEffect } from 'react';
import { useState } from "react";


function App() {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 1000);
  }, []);
  return (
    <>
      <div className="App">
        <div className="Side-barandpage-content" >
          <div style={{ width: '15%' }}> <SideBar></SideBar></div>
          <div  style={{ width: "100%"}}><PageContent ></PageContent></div>
           
        </div>
      </div>
    </>
  );
}

export default App;
