import About from './components/About';
import Hero from './components/Hero';
import { NavContextProvider } from './context/NavContext';

export default function App() {
    return (
        <NavContextProvider>
            <Hero />
            <About />
        </NavContextProvider>
    );
}
