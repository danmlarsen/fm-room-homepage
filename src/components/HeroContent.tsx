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
            className="min-h-[21.875rem] sm:min-h-[17.8125rem] md:min-h-[12.5rem] w-full lg:max-w-[25rem]"
        >
            <h1 className="text-[2.5rem] font-semibold tracking-[-2px] lg:text-[3rem] leading-[2.75rem] mb-[1.375rem]">{title}</h1>
            <p className="text-gray-600 font-medium tracking-[-0.33px] leading-[1.375rem] mb-6">{content}</p>
            <a className="flex items-center gap-[1.125rem] duration-200 hover:text-gray-600" href="#">
                <span className="text-[0.9375rem] leading-[1rem] font-medium tracking-[0.78125rem] uppercase">Shop now</span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg" role="img">
                    <title>Arrow icon</title>
                    <path
                        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                        fill="currentColor"
                        fillRule="nonzero"
                    />
                </svg>
            </a>
        </motion.div>
    );
}
