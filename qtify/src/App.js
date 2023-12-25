import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';



function App() {
  const [searchData, useSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData}/>
    </>
  );
}

export default App;
