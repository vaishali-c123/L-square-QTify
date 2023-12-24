import React from 'react';
import './App.css';


const Navbar =() =>{
  return(
    <div className ="navbar">
      <div className="left-section"></div>
      <div className="center-section">
        <input 
        type="text"
        placeholder='Search a songs of your choice'
        className='search-bar'
        />
      </div>
      <div className='right-section'>
        <button className='feedback-button'>Give Feedback</button>
      </div>
    </div>
   );
};
function App() {
  return (
    <div className="App">
      
     <Navbar/>
    </div>
  );
}

export default App;
