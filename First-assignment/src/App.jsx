import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Tabs from './Components/Tabs';
import Destinations from './Components/Destinations';
import Services from './Components/Services';
import ScholarshipCard from './Components/ScholarshipCard';
import FAQSection from './Components/FAQSection';
import BlogCarousel from './Components/BlogCarousel';
import Global from './Components/global';
import FreeTools from './Components/FreeTools';
import UpcomingEvents from './Components/UpcomingEvents';
import ProgramsCarousel from './Components/ProgramsCarousel';
import Testimonials from './Components/Testimonials';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tabs />
      <Destinations />
      <ProgramsCarousel/>
      <Services />
      <ScholarshipCard />
      <BlogCarousel />
      <UpcomingEvents/>
      <Global/>
      <Testimonials/>
      <FreeTools/>
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;