import { createContext, useContext, useState } from "react";

export const MonstersContext = createContext();

export const useMonstersContext = () => {
  return useContext(MobCreateContext);
};

export const MonsterContextReturn = ({ children }) => {
  console.log("mob context");
  const [monstersList, setMonstersList] = useState([]);

  const addMonsterContext = (newMonster) => {
    console.log("add monster context");
    setDoors([...monstersList, newMonster]);
  };

  return (
    <MonstersContext.Provider value={{ monsterList, addMonsterContext }}>
      {children}
    </MonstersContext.Provider>
  );
};
