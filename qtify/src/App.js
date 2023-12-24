import React from "react";
import Button from './components/Button/button';
import Search from './components/Search/search';

function App() {
  return (
    <div className="App">
      <Button>Give Feedback</Button>
      <Search placeholder={"Search a album of your choice"}></Search>
    </div>
  );
}

export default App;
