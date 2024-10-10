import NavigationItem from './NavigationItem';

export default function Navigation() {
    return (
        <nav className=" font-semibold tracking-tight">
            <ul className="flex gap-8">
                <NavigationItem>home</NavigationItem>
                <NavigationItem>shop</NavigationItem>
                <NavigationItem>about</NavigationItem>
                <NavigationItem>contact</NavigationItem>
            </ul>
        </nav>
    );
}
