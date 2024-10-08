import { useEffect, useState } from 'react';

type AppProps = {
    selectedBackground: number;
};

export default function HeroBackground({ selectedBackground }: AppProps) {
    const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 1200px)').matches);

    useEffect(() => {
        window.matchMedia('(min-width: 768px)').addEventListener('change', e => setIsDesktop(e.matches));
    }, []);

    const bgStyle = {
        backgroundImage: `url(/assets/images/${isDesktop ? 'desktop' : 'mobile'}-image-hero-${selectedBackground}.jpg)`,
    };

    return <div className={`absolute top-0 left-0 right-0 bottom-0 bg-center bg-cover bg-no-repeat}`} style={bgStyle}></div>;
}
