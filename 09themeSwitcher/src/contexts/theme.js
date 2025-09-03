import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider // alternate and easiest way  to wrap around the app

export default function useTheme(){ // custom hook
    return useContext(ThemeContext)
}