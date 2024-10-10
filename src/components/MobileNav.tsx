import { useContext } from 'react';
import Backdrop from './Backdrop';
import Navigation from './Navigation';
import { NavContext, NavContextType } from '../context/NavContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileNav() {
    const { navOpen } = useContext(NavContext) as NavContextType;

    return (
        <AnimatePresence>
            {navOpen && (
                <>
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.25, type: 'tween', ease: 'circInOut' }}
                        className="h-[110px] px-6 flex items-center justify-end fixed top-0 left-0 right-0 z-30 bg-white text-black"
                    >
                        <Navigation />
                    </motion.div>
                    <Backdrop />
                </>
            )}
        </AnimatePresence>
    );
}
