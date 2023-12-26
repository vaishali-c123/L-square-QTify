import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";



function App() {
  const [searchData, useSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData}/>
      <Hero />
    </>
  );
}

export default App;
