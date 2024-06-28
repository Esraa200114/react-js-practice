import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  // We face one problem when using useEffect the way we currently do it: It will execute when our app starts.
  // Why is this an issue?
  // It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.
  // We'll fix this over the next lectures, I just wanted to point it out here!

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
