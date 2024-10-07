import image1 from '../assets/images/image-about-dark.jpg';
import image2 from '../assets/images/image-about-light.jpg';

export default function About() {
    return (
        <footer className="grid max-w-[840px] lg:max-h-[266px] md:grid-cols-footerMd lg:grid-cols-footer lg:max-w-[1440px] md:mx-auto">
            <div>
                <img className="w-full h-full object-cover" src={image1} alt="Dark image of chairs" />
            </div>
            <div className="mx-8 my-16 space-y-4">
                <h2 className="text-sm font-bold tracking-widest uppercase">About our furniture</h2>
                <p className="text-gray-600">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream
                    space.
                </p>
            </div>
            <div className="md:hidden lg:block">
                <img className="w-full h-full object-cover" src={image2} alt="Grayscale image of chair" />
            </div>
        </footer>
    );
}
