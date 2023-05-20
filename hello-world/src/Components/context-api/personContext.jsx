import React from "react";

const PersonContext = React.createContext();
const CartContext = React.createContext();

const PersonProvider = PersonContext.Provider;
const PersonConsumer = PersonContext.Consumer;

const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

export { PersonProvider, PersonConsumer, CartProvider, CartConsumer };
