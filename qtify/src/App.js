import React,{useEffect, useState} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Outlet} from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";


function App() {

  const [searchData, useSearchData] = useState();
  const [data, setData] =useState({});

  const generateData=(key, source) => {
    source().then((data) =>{
       setData((prevData)=>{
        return {...prevData, [key]: data};
      });
    });
  };
  
  useEffect(() =>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  }, []);

  const { topAlbums = [] , newAlbums =[], songs=[]} = data;


  return (
    <>
    <div>
      <Navbar searchData={[...topAlbums, ...newAlbums]}/>
      <Outlet context={{ data: {topAlbums, newAlbums, songs} }}/>
    </div>
    </>
  );
}


<header>
  <mid component/>
</header>

export default App;
