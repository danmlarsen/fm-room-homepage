import { useContext } from 'react';
import IconHamburger from '../assets/images/icon-hamburger.svg';
import IconClose from '../assets/images/icon-close.svg';
import { NavContext, NavContextType } from '../context/NavContext';

import { AnimatePresence, motion } from 'framer-motion';

export default function MobileNavBtn() {
    const { navOpen, setNavOpen } = useContext(NavContext) as NavContextType;

    return (
        <div className={`flex items-center justify-center md:hidden z-50 ${navOpen ? 'fixed top-[45px] left-6' : 'absolute left-0 top-1/2 -translate-y-1/2'}`}>
            <button onClick={() => setNavOpen(prev => !prev)} aria-label={navOpen ? 'Close navigation' : 'Open navigation'}>
                <AnimatePresence initial={false} mode="wait">
                    {navOpen ? (
                        <motion.img
                            key={0}
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: [1, 1.5, 1], rotate: [0, 270] }}
                            src={IconClose}
                            alt="Cross icon"
                        />
                    ) : (
                        <motion.img
                            key={1}
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: [1, 1.5, 1], rotate: [270, 0] }}
                            src={IconHamburger}
                            alt="Hamburger icon"
                        />
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
