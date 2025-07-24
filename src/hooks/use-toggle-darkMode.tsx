import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

interface UseToggleDarkModeI {
    resolvedTheme: 'dark' | 'light'
}

const useToggleDarkMode = () => {
    const {setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return {
        changeTheme,
        theme,
        mounted
    }
};

export default useToggleDarkMode;
