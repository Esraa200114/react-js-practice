import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> 
            {/* so if props.input contains {type: "text", id: "ID", ....} 
            // then {...props.input} make sure that all elements or attributes 
            in that object are added to the input jsx element as props.  */}
        </div>
    );
})

export default Input;