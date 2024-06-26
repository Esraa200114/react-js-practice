import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://food-ordering-app-web-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = response.json()
            return data;

        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }))
        } catch (error) {
            dispatch(uiActions.setNotification({ status: 'error', title: 'Error!', message: 'Fetching cart data failed. ' }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.setNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data' }))

        const sendRequest = async () => {
            const repsonse = await fetch('https://food-ordering-app-web-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
                })

            if (!repsonse.ok) {
                throw new Error('Sending cart data failed!')
            }
        }

        try {
            await sendRequest()
            dispatch(uiActions.setNotification({ status: 'success', title: 'Success!', message: 'Successfully sent cart data.' }))
        } catch (error) {
            dispatch(uiActions.setNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed. ' }))
        }
    };
}