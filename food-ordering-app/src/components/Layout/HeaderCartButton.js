import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    // The reduce function is used to transform an array of elements to a single value
    const numberOfCartItems = items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    const buttonClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;