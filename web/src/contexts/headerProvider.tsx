import { useContext, useState } from 'react';
import { createContext, ReactNode } from 'react';

type headerContextData = {
    locale: string;
    setLocale: (value: string) => void;
};

export const HeaderContext = createContext({} as headerContextData);

type headerProviderProps = {
    children: ReactNode;
};

export function HeaderProvider({ children }: headerProviderProps) {
    const [locale, setLocale] = useState('');
    return (
        <HeaderContext.Provider
            value={{
                locale,
                setLocale
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}

export const useHeader = () => useContext(HeaderContext);