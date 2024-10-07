import Logo from './Logo';
import MobileNavBtn from './MobileNavBtn';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="flex justify-center items-center relative lg:justify-start gap-14">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 lg:hidden">
                <MobileNavBtn />
            </div>
            <Logo />
            <div className="hidden lg:block">
                <Navigation />
            </div>
        </header>
    );
}
