import SwitchButton from './SwitchButton';

export default function Switch() {
    return (
        <div className="flex bg-black">
            <SwitchButton angle="Left" />
            <SwitchButton angle="Right" />
        </div>
    );
}
