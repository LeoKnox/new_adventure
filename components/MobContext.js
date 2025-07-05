import { createContext, useContext, useState } from "react";

export const MobCreateContext = createContext();

export const useMob = () => {
  return useContext(MobContext);
};

export const MobContext = ({ children }) => {
  console.log("mob context");
  console.log({ children });
  const [doors, setDoors] = useState(1);

  const increaseDoors = () => {
    setDoors(doors + 1);
  };

  return (
    <MobContext.Provider value={{ doors, incDoors: increaseDoors }}>
      {children}
    </MobContext.Provider>
  );
};
