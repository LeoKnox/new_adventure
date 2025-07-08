import { createContext, useContext, useState } from "react";

export const MobCreateContext = createContext();

export const useMob = () => {
  return useContext(MobCreateContext);
};

export const MobContext = ({ children }) => {
  console.log("mob context");
  const [doors, setDoors] = useState([0, 0]);

  const increaseDoors = (doorValue, doorLoc) => {
    console.log("inc door");
    temp[doorLoc] = +doorValue;
    setDoors(temp);
  };

  return (
    <MobCreateContext.Provider value={{ doors, incDoors: increaseDoors }}>
      {children}
    </MobCreateContext.Provider>
  );
};
