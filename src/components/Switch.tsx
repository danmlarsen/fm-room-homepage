import SwitchButton from './SwitchButton';

type AppProps = {
    onSwitch: (direction: string) => void;
};

export default function Switch({ onSwitch }: AppProps) {
    return (
        <div className="flex bg-black">
            <SwitchButton angle="Left" onClick={() => onSwitch('left')} />
            <SwitchButton angle="Right" onClick={() => onSwitch('right')} />
        </div>
    );
}
