export default function NavigationItem({ children }: { children: string }) {
    return (
        <li className="relative group leading-none">
            <a href="#">{children}</a>
            <div className="w-4 h-[2px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition duration-300 group-hover:opacity-100"></div>
        </li>
    );
}
