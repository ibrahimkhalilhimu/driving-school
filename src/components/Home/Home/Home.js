import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <div className="background">
           <Header/>
            <Banner/>
           </div>
           <Services/>
           <ChooseUs/>
           <Team/>
           <Testimonial/>
           <Faq/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;