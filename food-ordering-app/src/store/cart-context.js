import React from "react";

// This default data will give use better autocompletetion later.
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},

});

export default CartContext;