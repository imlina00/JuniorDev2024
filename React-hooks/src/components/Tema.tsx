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

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, postaviTemu] = useState(defaultTheme);

  function promjenaTeme() {
    postaviTemu(prevTema => prevTema === "light" ? "dark" : "light");
  }

  return (
    <TemaContext.Provider value={{ tema, promjenaTeme }}>
      {children}
    </TemaContext.Provider>
  );
}

export default TemaContext;
