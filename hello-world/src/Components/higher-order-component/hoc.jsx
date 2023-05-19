import React from "react";
import { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  const NewComponent = () => {
    const [money, setMoney] = useState(() => 10);

    const increaseMoney = () => {
      setMoney((money) => money + 1);
    };
    return <OriginalComponent increaseMoney={increaseMoney} money={money} />;
  };
  return NewComponent;
}

export default UpdatedComponent;
