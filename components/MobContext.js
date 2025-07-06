import { createContext, useContext, useState } from "react";

export const MobCreateContext = createContext();

export const useMob = () => {
  return useContext(MobCreateContext);
};

export const MobContext = ({ children }) => {
  console.log("mob context");
  console.log({ children });
  const [doors, setDoors] = useState([0, 0]);

  const increaseDoors = (doorValue) => {
    setDoors(doorsValue + 1);
  };

  return (
    <MobCreateContext.Provider value={{ doors, incDoors: increaseDoors }}>
      {children}
      <p>t</p>
    </MobCreateContext.Provider>
  );
};
