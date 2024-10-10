import { useContext } from 'react';
import { NavContext, NavContextType } from '../context/NavContext';

import { motion } from 'framer-motion';

export default function Backdrop() {
    const { setNavOpen } = useContext(NavContext) as NavContextType;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black z-20"
            onClick={() => setNavOpen(false)}
        ></motion.div>
    );
}
