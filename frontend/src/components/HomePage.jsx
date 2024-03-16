import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Services from './Services';
import Footer from './Footer';
import Header from './Header';
import { LuArrowBigUpDash } from "react-icons/lu";

const HomePage = ({ data, setData }) => {
    const [showSticky, setShowSticky] = useState(false);

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
            <NavBar data={data} setData={setData} />
            <Header />
            {showSticky && (
                <div className="fixed bottom-0 right-0 bg-gray-200 p-4">
                    <a href="#home"><LuArrowBigUpDash className="text-7xl"/></a>
                </div>
            )}
            <AboutUs />
            <Services />
            <Footer />
        </>
    );
};

export default HomePage;
