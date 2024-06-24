import CartContext from "./cart-context";
import { useReducer } from "react";

// A component to manage the cart context data 
// and provide access to those components which want access to the context.

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === "ADD_ITEM") {

        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // Checking if the item to be added already exists in the cart
        const existingItemCartItemIndex = state.items.findIndex((item) => { return item.id === action.item.id });

        const existingItemCartItem = state.items[existingItemCartItemIndex];

        let updatedItems;

        if (existingItemCartItem) {
            const updatedItem = { ...existingItemCartItem, amount: existingItemCartItem.amount + action.item.amount };
            updatedItems = [...state.items];
            updatedItems[existingItemCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    } else if (action.type === "REMOVE_ITEM"){

        // Getting the item to be removed from the cart
        const existingItemCartItemIndex = state.items.findIndex((item) => { return item.id === action.id });
        const existingItemCartItem = state.items[existingItemCartItemIndex];

        // Updating the total amount
        const updateTotalAmount = state.totalAmount - existingItemCartItem.price;

        let updatedItems;

        if(existingItemCartItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {...existingItemCartItem, amount: existingItemCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemCartItemIndex] = updatedItem;
        }

        console.log(updateTotalAmount);
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount < 0 ? 0 : updateTotalAmount
        };

    }

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    }

    // Concrete context values that will be updated later
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;