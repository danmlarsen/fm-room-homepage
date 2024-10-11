import image1 from '../assets/images/image-about-dark.jpg';
import image2 from '../assets/images/image-about-light.jpg';

export default function About() {
    return (
        <footer className="grid mx-auto max-w-md md:max-w-3xl md:grid-cols-2 lg:grid-cols-footer lg:max-w-[1440px] bg-white">
            <div>
                <img className="w-full h-full object-cover" src={image1} alt="Dark image of chairs" />
            </div>
            <div className="mx-8 my-16 flex items-center justify-center md:col-span-2 lg:col-span-1 lg:mx-12 lg:my-8">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold tracking-[7px] leading-[22px] uppercase md:text-base">About our furniture</h2>
                    <p className="text-gray-600 font-medium tracking-[-0.33px] leading-[22px]">
                        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme
                        that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or
                        anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
            </div>
            <div className="md:row-start-1 md:col-start-2 lg:col-auto lg:row-auto">
                <img className="w-full h-full object-cover" src={image2} alt="Grayscale image of chair" />
            </div>
        </footer>
    );
}
