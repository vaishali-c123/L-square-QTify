import React from "react";
import styles from "./HomePage.module.css";
import {useOutletContext} from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";


function HomePage(){
   const {data} = useOutletContext();
   const {topAlbums, newAlbums, songs} =data;
   return (
    <>
    <Hero />
    <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="albums"/>
        <Section title="New Albums" data={newAlbums} type="albums"/>
        {/* <Section title="Songs" data={songs} type={songs}/> */}

    </div>

    </>
   )

}

export default HomePage;