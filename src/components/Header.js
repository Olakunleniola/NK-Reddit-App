import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/posts/postSlice";
import { DarkModeIcon, LightMode, MenuIcon, RedditLogo } from "./SvgIcons";
import { getDark, setDark } from "../features/posts/postSlice";
import { useParams, useNavigate } from "react-router";


export function Header () {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const dark = useSelector(getDark);
    const {title} = useParams();
    const navigete = useNavigate();

    // Add and remove dark mode styles if dark is true of false
    useEffect(() => {
        if(dark) {
            document.body.classList.add("dark")
            document.querySelector(".search").classList.add("search-dark"); 
            document.querySelector(".mini").classList.add("mini-dark"); 
            document.querySelector(".reddit").classList.add("reddit-dark"); 
            document.querySelector(".mode").classList.add("mode-dark"); 
            document.querySelector("header").classList.add("dark"); 
            document.querySelector(".sub-head").classList.add("dark","mode-dark"); 
        }else {
            document.body.classList.remove("dark")
            document.querySelector(".search").classList.remove("search-dark"); 
            document.querySelector(".mini").classList.remove("mini-dark"); 
            document.querySelector(".reddit").classList.remove("reddit-dark"); 
            document.querySelector(".mode").classList.remove("mode-dark"); 
            document.querySelector("header").classList.remove("dark"); 
            document.querySelector(".sub-head").classList.remove("dark", "mode-dark"); 
        }
    }, [dark]);

    // Add an event listener to show go top button at certain scroll level 
    useEffect(() => {
        const handleScroll = () => {
            const top = document.querySelector(".go-top")
            // Calculate the scroll position
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            
            // Determine the threshold scroll position where you want to show the element
            const threshold = 1500; // Adjust this value based on your requirement
            
            // Update the state based on the scroll position
            if(scrollPosition > threshold) {
                top.style.display = "block"
            }else {
                top.style.display = "none"
            }
        };
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    // Handle search input
    function handleChange(e) {
        const {value} = e.target;
        setInput(value)
    }

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(input))
        setInput('')
    }

    //  handle dark mode toggling
    const toggleDarkMode = () => {
        
        const isDark = localStorage.getItem("dark")
        if (!isDark) {
            localStorage.setItem("dark", true)
            dispatch(setDark(true))
        }else {
            localStorage.removeItem("dark")
            dispatch(setDark(false))
        }
    }

    // Handle menu toggling
    const toggleMenu = () => {
        if (!title) {
            window.scrollTo(0, 0)
            document.querySelector(".content-overlay").classList.toggle("show")
            document.querySelector(".sub-head").classList.toggle("toggle-menu")
        }else {
            navigete("/")
        }
    }

    return (
        
        <header id="top">
            <div className="logo-div" onClick={() => window.scrollTo(0, 0)}>
                <RedditLogo />
                <p className="reddit"><span className="mini">NK</span>Reddit</p>
            </div>
            <form action="#" className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="search" 
                    placeholder="Search"
                    value={input || ''}
                    onChange={handleChange}
                />
                <button 
                    className="material-symbols-outlined" 
                    id="search-logo"
                >search</button>
            </form>

            <div className="mode">
                <button className="toggle-mode" onClick={toggleDarkMode}>
                { !dark ?
                    <DarkModeIcon />
                    : <LightMode /> 
                }   
                </button>
                <button className="menu-button" onClick={toggleMenu}><MenuIcon /></button>
            </div>
        </header>
    )
}