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
        buttonHeaderColor: '#FFFFFC',
        buttonHeaderTextColor: '#000000',
        borderBottomColor: '#C9C9C9',
        subTitleColor: '#151515',
        imageAbout: 'url(../../../about-pic-white.png)',
        imageContacts: 'url(../../../logoDark.png)'
    };

    const darkModeColors: Colors = {
        backgroundColor: '#201F1F',
        buttonHeaderColor: '#151515',
        buttonHeaderTextColor: '#7E5DCA',
        borderBottomColor: '#424242',
        subTitleColor: '#FFFFFC',
        imageAbout: 'url(../../../about-pic-dark.png)',
        imageContacts: 'url(../../../logoLight.png)'
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
        root.style.setProperty('--image-contacts', colors.imageContacts);
    }, [darkMode, colors]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, colors }}>
            {children}
        </DarkModeContext.Provider>
    );
};