import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import Benefits from "@/components/Benefits";
import Statistics from "@/components/Statistics";
import ServiceDetails from "@/components/ServiceDetails";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesGrid />
      <Benefits />
      <Statistics />
      <ServiceDetails />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
