import IconArrow from '../assets/images/icon-arrow.svg';
import Switch from './Switch';
import Header from './Header';
import HeroBackground from './HeroBackground';

export default function Hero() {
    return (
        <div className="grid max-w-[840px] md:grid-cols-heroMd lg:grid-cols-hero lg:min-h-[534px] lg:max-w-[1440px] md:mx-auto">
            <div className="h-[360px] px-6 py-12 relative lg:h-full">
                <HeroBackground />
                <Header />
                <div className="absolute right-0 bottom-0 lg:translate-x-full">
                    <Switch />
                </div>
            </div>
            <div className="mx-8 my-16 space-y-4 lg:flex lg:flex-col lg:justify-center">
                <h1 className="text-4xl font-semibold tracking-tighter">Discover innovative ways to decorate</h1>
                <p className="text-gray-600">
                    We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in
                    your own style with our collection and make your property a reflection of you and what you love.
                </p>
                <a className="flex items-center gap-[30px]" href="#">
                    <span className="text-sm font-medium tracking-[12.5px] uppercase">Shop now</span>
                    <img src={IconArrow} alt="Arrow icon" />
                </a>
            </div>
        </div>
    );
}
