import React, { createContext, useState, ReactNode } from 'react';

const defaultTheme = "light";

interface ThemeContextValue {
  tema: string;
  promjenaTeme: () => void;
}

const TemaContext = createContext<ThemeContextValue>({
  tema: defaultTheme,
  promjenaTeme: () => {}
});

export const TemaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tema, postaviTemu] = useState(defaultTheme);

  const promjenaTeme = () => {
    postaviTemu(prevTema => prevTema === "light" ? "dark" : "light");
  };

  return (
    <TemaContext.Provider value={{ tema, promjenaTeme }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaContext;
