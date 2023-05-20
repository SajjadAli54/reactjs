import React from "react";

const PersonContext = React.createContext();

const PersonProvider = PersonContext.Provider;

const PersonConsumer = PersonContext.Consumer;

export { PersonProvider, PersonConsumer };
