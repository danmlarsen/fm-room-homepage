import Logo from './Logo';
import MobileNavBtn from './MobileNavBtn';
import Navigation from './Navigation';

import MobileNav from './MobileNav';

export default function Header() {
    return (
        <header className="flex justify-center items-center relative md:justify-start gap-14">
            <MobileNavBtn />
            <MobileNav />
            <Logo />
            <div className="text-white hidden md:block">
                <Navigation />
            </div>
        </header>
    );
}
