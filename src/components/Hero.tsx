import Switch from './Switch';
import Header from './Header';
import HeroBackground from './HeroBackground';
import { useState } from 'react';
import HeroContent from './HeroContent';

import { AnimatePresence } from 'framer-motion';

const data = [
    {
        title: 'Discover innovative ways to decorate',
        content:
            'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
        title: 'Manufactured with the best materials',
        content:
            'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
    {
        title: 'About our furniture',
        content:
            'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
    },
];

export default function Hero() {
    const [selectedContent, setSelectedContent] = useState(0);

    function handleSlider(direction: string) {
        if (direction === 'left') {
            setSelectedContent(prevState => {
                if (prevState === 0) return 2;
                else return prevState - 1;
            });
        }
        if (direction === 'right') {
            setSelectedContent(prevState => {
                if (prevState === 2) return 0;
                else return prevState + 1;
            });
        }
    }

    return (
        <div className="grid mx-auto max-w-[600px] lg:grid-cols-hero lg:min-h-[534px] lg:max-w-[1440px] bg-white">
            <div className="min-h-[360px] px-6 py-12 relative lg:h-full bg-white lg:px-16 lg:pt-16 z-10">
                <AnimatePresence initial={false}>
                    <HeroBackground key={selectedContent} selectedBackground={selectedContent} />
                </AnimatePresence>
                <Header />
                <div className="absolute right-0 bottom-0 lg:translate-x-full">
                    <Switch onSwitch={handleSlider} />
                </div>
            </div>
            <div className="flex justify-center mx-8 my-16 lg:mt-[120px] overflow-x-hidden">
                <AnimatePresence initial={false}>
                    <HeroContent key={selectedContent} data={data[selectedContent]} />
                </AnimatePresence>
            </div>
        </div>
    );
}
