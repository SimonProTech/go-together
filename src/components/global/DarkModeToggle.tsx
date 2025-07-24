'use client'

import React from 'react';
import {LoaderCircle, MoonIcon, SunIcon} from "lucide-react";
import useToggleDarkMode from "@/hooks/use-toggle-darkMode";

const DarkModeToggle = () => {
    const {changeTheme, theme, mounted} = useToggleDarkMode();

    if (!mounted || !theme) {
        return (
            <div className="rounded-md">
                <LoaderCircle size={21} className="animate-spin" />
            </div>
        )
    }

    return (
        <>
            {theme === 'light' ? (
                <MoonIcon size={21} onClick={changeTheme} className={`cursor-pointer hover:scale-105 transition-all`}/>
            ) : (
                <SunIcon size={21} onClick={changeTheme}
                         className={`cursor-pointer hover:scale-105 transition-all`}/>
            )}
        </>
    );
};

export default DarkModeToggle;
