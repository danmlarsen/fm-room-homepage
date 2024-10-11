import SliderButton from './SliderButton';

type AppProps = {
    onClick: (direction: string) => void;
};

export default function Slider({ onClick }: AppProps) {
    return (
        <div className="flex bg-black">
            <SliderButton angle="Left" onClick={() => onClick('left')} />
            <SliderButton angle="Right" onClick={() => onClick('right')} />
        </div>
    );
}
