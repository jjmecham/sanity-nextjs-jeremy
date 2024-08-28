// "user client";
// import { Chilanka } from "next/font/google";
// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext("light");

// export const ThemeProvider = ({children}: any ) => {
//     const [theme, setTheme] = useState("theme");
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//         const storedTheme = localStorage.getItem("theme") || "light";
//         setTheme(storedTheme);
//     }, []);
    
//     if (!isMounted) {
//         return <>Loading...</>
//     }

//     const changeTheme = (theme: string) => {
//         setTheme(theme);
//         localStorage.setItem("theme", theme);
//     }

//     return (
//         <ThemeContext.Provider value={{theme, changeTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )

// }