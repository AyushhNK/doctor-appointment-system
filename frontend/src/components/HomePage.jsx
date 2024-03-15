import NavBar from './NavBar';
import AboutUs from './AboutUs'
import Services from './Services'
import background from '/images/background.png'; // Import the background image

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="bg-cover bg-center" style={{ height: `calc(100vh - 4rem)`, backgroundImage: `url(${background})` }}></div>
        	<AboutUs/>
        	<Services/>
        </>
    );
}

export default HomePage;

