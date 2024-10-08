import { motion, useIsPresent } from 'framer-motion';

type AppProps = {
    data: { title: string; content: string };
};

export default function HeroContent({ data }: AppProps) {
    const { title, content } = data;

    const isPresent = useIsPresent();

    return (
        <motion.div
            style={{ position: isPresent ? 'static' : 'absolute' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="flex-shrink-0 w-full space-y-4 lg:max-w-[400px]"
        >
            <h1 className="text-[40px] leading-tight font-semibold tracking-tighter lg:text-5xl">{title}</h1>
            <p className="text-gray-600 tracking-[-0.33px] leading-[22px]">{content}</p>
            <a className="flex items-center gap-[30px] duration-200 hover:text-gray-600" href="#">
                <span className="text-sm font-medium tracking-[12.5px] uppercase ">Shop now</span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fillRule="nonzero" />
                </svg>
            </a>
        </motion.div>
    );
}
