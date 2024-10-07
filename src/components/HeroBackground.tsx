import heroBackgroundMobile1 from '../assets/images/mobile-image-hero-1.jpg';

export default function HeroBackground() {
    const bgStyle = {
        background: `url(${heroBackgroundMobile1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
    };

    return <div className="absolute top-0 left-0 right-0 bottom-0" style={bgStyle}></div>;
}
