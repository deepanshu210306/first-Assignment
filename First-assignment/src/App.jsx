import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Tabs from './Components/Tabs';
import Destinations from './Components/Destinations';
import Services from './Components/Services';
import ScholarshipCard from './Components/ScholarshipCard';
import FAQSection from './Components/FAQSection';
import BlogCarousel from './Components/BlogCarousel';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tabs />
      <Destinations />
      <Services />
      <ScholarshipCard />
      <BlogCarousel />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;