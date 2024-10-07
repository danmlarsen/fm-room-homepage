import IconAngleLeft from '../assets/images/icon-angle-left.svg';
import IconAngleRight from '../assets/images/icon-angle-right.svg';

export default function SwitchButton({ angle = 'Left' }) {
    return (
        <button className="h-14 w-14 lg:h-20 lg:w-20 flex items-center justify-center transition duration-300 hover:bg-gray-800">
            <img src={angle === 'Left' ? IconAngleLeft : IconAngleRight} alt={`${angle} angle icon`} />
        </button>
    );
}
