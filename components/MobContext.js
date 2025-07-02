import { createContext, useContext, useState } from "react";

export const MobContext = createContext();

export const updateMob = () => {
  return useContext(MobContext);
};
