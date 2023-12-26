import React from 'react';
import styles from "./Hero.module.css";

function Hero(){
    return (
        <div className={styles.hero}>
            <div>
            <h2>
                100 Thousand Songs, ad-free 
            </h2> 
            <h2> Over thousands podcasts episodes
            </h2> 
            </div>
            <div>
                <img src={require("../../assets/vibrating-headphone 1.png")} width={112} alt="headphone"/>
            </div>
        </div>
    )
}

export default Hero;