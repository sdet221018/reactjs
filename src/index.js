import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import User from './User';

const main = {
  background: 'black', 
  height: '100vh', 
  width: '100%'
}

const firstvariable = 'Expert'
const secondvariable = 'Developer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <div style={main}>
    <h3 style={{color: 'white'}}>Welcome to Our Official Website of </h3>
    <Header />
    <h2 style={{color: 'yellow'}}>
      {`We are ${firstvariable} ${secondvariable}`}
    </h2>
    
    <Header />

    <h2 style={{color: 'purple'}}>
      <User name="Jakub" expertise="FrontEnd developer"/>
      <User name="Sarah" expertise="BackEnd developer"/>
      <User name="David" expertise="DevOps Engineer"/>
    </h2>

  </div>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals