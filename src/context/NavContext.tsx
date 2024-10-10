import { createContext, ReactNode, useState } from 'react';

export type NavContextType = {
    navOpen: boolean;
    setNavOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
};

const NavContext = createContext<NavContextType | null>(null);

function NavContextProvider({ children }: { children: ReactNode }) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <NavContext.Provider
            value={{
                navOpen,
                setNavOpen,
            }}
        >
            {children}
        </NavContext.Provider>
    );
}

export { NavContextProvider, NavContext };
