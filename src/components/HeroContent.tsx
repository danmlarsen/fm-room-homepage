import IconArrow from '../assets/images/icon-arrow.svg';

type AppProps = {
    data: { title: string; content: string };
};

export default function HeroContent({ data }: AppProps) {
    const { title, content } = data;

    return (
        <div className="flex-shrink-0 w-full space-y-4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-[40px] leading-tight font-semibold tracking-tighter">{title}</h1>
            <p className="text-gray-600">{content}</p>
            <a className="flex items-center gap-[30px]" href="#">
                <span className="text-sm font-medium tracking-[12.5px] uppercase">Shop now</span>
                <img src={IconArrow} alt="Arrow icon" />
            </a>
        </div>
    );
}
