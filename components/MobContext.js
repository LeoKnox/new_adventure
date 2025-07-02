import { createContext, useContext, useState } from "react";

export const MobContext = createContext();

export const useMob = () => {
  return useContext(MobContext);
};

export const updateMob = () => {
  const [doors, setDoors] = useState(0);

  const increaseDoors = () => {
    setDoors(doors + 1);
  };
};
