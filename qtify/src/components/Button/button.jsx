import React from 'react';
import styles from "./Button.Module.css";


function Button({children}) {
    return <button className={styles.button}>{children}</button>
}

export default Button;