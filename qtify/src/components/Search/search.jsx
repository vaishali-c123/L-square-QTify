import React from 'react';
import styles from "./Search.Module.css";
import {ReactComponent as SearchIcon} from  '../../assets/search-icon.svg'; // Valid for only svg files

function Search({placeholder})
{
    const onSubmit=(e) =>{
        e.preventDefault();

    }
    return (
        <form className={styles.wrapper}onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchbutton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}

export default Search;