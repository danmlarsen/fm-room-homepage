import NavigationItem from './NavigationItem';

export default function Navigation() {
    return (
        <nav className="font-semibold tracking-tight">
            <ul className="flex gap-[31px]">
                <NavigationItem>home</NavigationItem>
                <NavigationItem>shop</NavigationItem>
                <NavigationItem>about</NavigationItem>
                <NavigationItem>contact</NavigationItem>
            </ul>
        </nav>
    );
}
