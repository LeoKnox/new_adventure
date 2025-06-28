import { createContext, useContext, useState } from "react";

const MobContext = createContext();

export const mobProvider = ({ children }) => {
  const [newMob, setNewMob] = useState({[`3:4`]:1});
  const setMob = () => setNewMob({[`4:5`]:1})
  //const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <MobContext.Provider value={{ newMob, setMob }}>
      {children}
    </MobContext.Provider>
  );
};

export const useMob = () => useContext(CountContext);
