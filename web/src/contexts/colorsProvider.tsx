import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
    colors: {
        backgroundColor: string;
        buttonHeaderColor: string;
        buttonHeaderTextColor: string;
        borderBottomColor: string;
        [key: string]: string;
    };
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface Colors {
    backgroundColor: string;
    buttonHeaderColor: string;
    buttonHeaderTextColor: string;
    borderBottomColor: string;
    subTitleColor: string;
    [key: string]: string;
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    const lightModeColors: Colors = {
        backgroundColor: '#EFF1F0',
        bannerTextColor: "#FFFFFC",
        buttonHeaderColor: '#FFFFFF',
        buttonHeaderTextColor: '#000000',
        borderBottomColor: '#C9C9C9',
        subTitleColor: '#313132',
        imageAbout: 'url(../../../about-pic-white.png)',
        bannerService: 'url(../../../bannerLight.png)'
    };

    const darkModeColors: Colors = {
        backgroundColor: '#313131',
        bannerTextColor: "#7E5DCA",
        buttonHeaderColor: '#151515',
        buttonHeaderTextColor: '#7E5DCA',
        borderBottomColor: '#424242',
        subTitleColor: '#FFFFFC',
        imageAbout: 'url(../../../about-pic-dark.png)',
        bannerService: 'url(../../../bannerDark.png)'
    };

    const colors: Colors = darkMode ? darkModeColors : lightModeColors;

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const root = document.documentElement;
        for (const key in colors) {
            if (key in colors) {
                root.style.setProperty(`--${key}`, colors[key]);
            }
        }
        root.style.setProperty('--image-about', colors.imageAbout);
        root.style.setProperty('--bannerService', colors.bannerService);
    }, [darkMode, colors]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, colors }}>
            {children}
        </DarkModeContext.Provider>
    );
};