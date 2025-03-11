import React, { createContext, useState, useContext } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // TODO: what does this function do?
  // it checks if the item to be added to the basket is already inside.
  // if it is, it adds 1 to the quantity.
  // if it isn't, it adds the new item to the basket, with a quantity of 1.

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const item = prevBasket.find((item) => item.id === product.id);
      if (item) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

const removeFromBasket = (product) => {
  setBasket((prevBasket) => {
    return prevBasket.filter((item) => item.id !== product.id)
  });
}
  // TODO: what does this function do?
  // if the input quantity is greater than 1, it updates the quantity of an item from the basket by id
  // otherwise, it updates the item to have a quantity of 1.
  const updateQuantity = (id, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const calculateTotal = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, calculateTotal, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
