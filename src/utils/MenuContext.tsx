"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "vm";

interface MenuContextValue {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// menu default value for the context (empty object)
const defaultMenuContextValue: MenuContextValue = {
  menuOpen: false,
  setMenuOpen: () => {},
};

// context with the defined type and default value
export const MenuIsOpenOrNot = createContext(defaultMenuContextValue);

type Prop = {
  children: ReactNode;
};

const MenuContext = ({ children }: Prop) => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <MenuIsOpenOrNot.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuIsOpenOrNot.Provider>
  );
};

export default MenuContext;
