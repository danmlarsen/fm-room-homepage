import IconAngleLeft from '../assets/images/icon-angle-left.svg';
import IconAngleRight from '../assets/images/icon-angle-right.svg';

type AppProps = {
    angle: string;
    onClick: () => void;
};

export default function SliderButton({ angle = 'Left', onClick }: AppProps) {
    return (
        <button
            className="h-14 w-14 lg:h-20 lg:w-20 flex items-center justify-center transition duration-300 hover:bg-gray-800"
            onClick={onClick}
            aria-label={angle === 'Left' ? 'Go to previous slide' : 'Go to next slide'}
        >
            <img src={angle === 'Left' ? IconAngleLeft : IconAngleRight} alt={`${angle} angle icon`} />
        </button>
    );
}
