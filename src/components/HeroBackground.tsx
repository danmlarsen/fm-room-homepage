import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

type AppProps = {
    selectedBackground: number;
};

const DESKTOP_BREAKPOINT = '768px';

export default function HeroBackground({ selectedBackground }: AppProps) {
    const [isDesktop, setIsDesktop] = useState(window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT})`).matches);

    useEffect(() => {
        window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT})`).addEventListener('change', e => setIsDesktop(e.matches));
    }, []);

    const bgStyle = {
        backgroundImage: `url(/assets/images/${isDesktop ? 'desktop' : 'mobile'}-image-hero-${selectedBackground + 1}.jpg)`,
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute top-0 left-0 right-0 bottom-0 bg-center bg-cover bg-no-repeat}`}
            style={bgStyle}
        ></motion.div>
    );
}
