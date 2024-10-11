import Hero from './components/Hero';
import Footer from './components/Footer';
import { NavContextProvider } from './context/NavContext';

export default function App() {
    return (
        <NavContextProvider>
            <Hero />
            <Footer />
        </NavContextProvider>
    );
}
