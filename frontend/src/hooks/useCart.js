import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const CART_KEY = 'cart'  //Store in local storage to maintain state
const EMPTY_CART = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

export default function CartProvider({children}) {

    const initCart = getCartFromLocalStorage();

    const [cartItems, setCartItems] = useState(initCart.items);
    
    const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initCart.totalCount);

    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price));
        const totalCount = sum(cartItems.map(item => item.quantity));

        setTotalPrice(totalPrice);
        setTotalCount(totalCount);

        localStorage.setItem(CART_KEY, JSON.stringify({
            items: cartItems,
            totalPrice,
            totalCount,
        }))

    }, [cartItems])


    function getCartFromLocalStorage(){
        const storeCart = localStorage.getItem(CART_KEY);
        return storeCart? JSON.parse(storeCart) : EMPTY_CART;
    }

    const sum = items => {
        return items.reduce((prevValue, currValue) => prevValue + currValue, 0 )
    }

    const removeFromCart = foodId => {
        const filteredCardItems = cartItems.filter(item => item.food.id !== foodId);
        setCartItems(filteredCardItems)
    };

    const changeQauntity = (cartItem, newQauntity) => {
        const { food } = cartItem;

        const changedCartItem = {
            ...cartItem,
            quantity: newQauntity,
            price: food.price * newQauntity,
        };

        setCartItems(
            cartItems.map(item => item.food.id === food.id ? changedCartItem : item)
        )
    };

    const addToCart = food => {
        const cartItem = cartItems.find(item => item.food.id === food.id);
        if(cartItem){
            changeQauntity(cartItem, cartItem.quantity+1);
        }else{
            setCartItems([...cartItems, {food, quantity: 1, price: food.price}]);
        }
    };

    const clearCart = () => {
        localStorage.removeItem(CART_KEY);
        const { items, totalPrice, totalCount } = EMPTY_CART;
        setCartItems(items);
        setTotalPrice(totalPrice);
        setTotalCount(totalCount);
    }


    return (
        <CartContext.Provider value={{ 
            cart: { items:cartItems, totalPrice, totalCount }, 
            removeFromCart,
            changeQauntity,
            addToCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
