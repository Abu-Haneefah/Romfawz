import WhyChooseUsSection from "./components/AboutUs";
import RegistrationSection from "./components/Contact";
import HajjFooter from "./components/Footer";
import HajjHeroSection from "./components/Hero";
import PackagesSection from "./components/Package";
import PilgrimTestimonialsSection from "./components/Testimonials";

function HomePage() {
  return (
    <>
      <HajjHeroSection />
      <PackagesSection />
      <WhyChooseUsSection />
      <PilgrimTestimonialsSection />
      <RegistrationSection />
      <HajjFooter />
    </>
  );
}

export default HomePage;
