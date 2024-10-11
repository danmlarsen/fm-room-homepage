import Slider from './Slider';
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
        <div className="grid mx-auto max-w-md md:max-w-3xl lg:grid-cols-hero lg:min-h-[33.375rem] lg:max-w-8xl bg-white">
            <div className="min-h-[22.5rem] md:min-h-[33.375rem] px-6 py-12 lg:pl-16 lg:pt-16 relative lg:h-full">
                <AnimatePresence initial={false}>
                    <HeroBackground key={selectedContent} selectedBackground={selectedContent} />
                </AnimatePresence>
                <Header />
                <div className="absolute right-0 bottom-0 lg:translate-x-full">
                    <Slider onClick={handleSlider} />
                </div>
            </div>
            <main className="flex justify-center mx-8 my-16 lg:mt-[7.5rem] overflow-hidden relative">
                <AnimatePresence initial={false}>
                    <HeroContent key={selectedContent} data={data[selectedContent]} />
                </AnimatePresence>
            </main>
        </div>
    );
}
