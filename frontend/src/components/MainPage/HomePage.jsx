import { useState, useEffect,useContext } from 'react';
import NavBar from '../NavFooter/NavBar';
import AboutUs from './AboutUs';
import Services from './Services';
import Footer from '../NavFooter/Footer';
import Header from './Header';
import FooterImage from './FooterImage';
import Dashboard from '../HospitalService/Dashboard'
import { LuArrowBigUpDash } from "react-icons/lu";
import scrollToTop from '../customhooks/useScrollToTop'

const HomePage = () => {
    const [showSticky, setShowSticky] = useState(false);

    scrollToTop();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <NavBar/>
            <Header />
            {showSticky && (
                <div className="fixed bottom-0 right-0 bg-gray-200 p-4">
                    <a href="#home"><LuArrowBigUpDash className="text-7xl"/></a>
                </div>
            )}
            <AboutUs />
            <Services />
            <div className="flex flex-col h-screen" id="contact">
                <FooterImage />
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;
