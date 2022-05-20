import Logo from "./logo.png";
import './heder1.css';
import {useState} from 'react';
import { createContext } from "react";
import react from "react";
import {Link} from "react-router-dom";

export const ThemeContext = createContext(null);

export function Header(){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
     setTheme((curr) => (curr === "active" ? "dark" : "active"));
    };
    return(
        <div className='head'>

            <Link to="/"><img src={Logo} /></Link>

            {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div  onClick={toggleTheme} id="navMenu_S" >
                    <div id = "navMenu" className={theme}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </ThemeContext.Provider> */}
            {/* <nav>
                <Link>
                </Link>  
            </nav> */}

        </div>
    );
}