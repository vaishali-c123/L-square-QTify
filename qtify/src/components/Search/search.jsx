import React from 'react';
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from  '../../assets/search-icon.svg'; // Valid for only svg files

function Search({placeholder})
{
    const onSubmit=(e) =>{
        e.preventDefault();

    }
    return (
        <div className={styles.wrapper} onSubmit={onSubmit}>
            <input 
            type ="text"
            className={styles.search} 
            placeholder={placeholder} required
            />
            <button className={styles.searchbutton} type="submit">
                <SearchIcon/>
            </button>
        </div>
    )
}

export default Search;
