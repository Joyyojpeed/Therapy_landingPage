import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import RatesSection from "@/components/sections/RatesSection";
import AvailabilitySection from "@/components/sections/AvailabilitySection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/common/Footer";
import Divider from "@/components/common/Divider";
import Navbar from "@/components/sections/Navbar";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-lg tracking-wide leading-relaxed text-black_olive bg-isabelline font-sans w-full">
      <Navbar />
      <HeroSection />

      {/* About Section - Updated with clipped decorations */}
      <section id="about" className="w-full bg-alabaster py-20 px-8 relative overflow-hidden">
        {/* Decorations with clipping */}
        <div className="absolute left-0 top-0 w-40 h-40 sm:w-64 sm:h-64 border-2 border-black_olive/20 rounded-lg transform rotate-45 -translate-x-1/3 -translate-y-1/3 z-0 clip-decoration" />
        <div className="absolute left-0 top-0 w-40 h-40 sm:w-64 sm:h-64 border-2 border-black_olive/30 rounded-lg transform rotate-12 -translate-x-1/4 -translate-y-1/4 z-0 clip-decoration" />
        
        <div className="absolute right-0 bottom-0 w-40 h-40 sm:w-64 sm:h-64 border-2 border-black_olive/20 rounded-lg transform rotate-45 translate-x-1/4 translate-y-1/4 z-0 clip-decoration" />
        <div className="absolute right-0 bottom-0 w-40 h-40 sm:w-64 sm:h-64 border-2 border-black_olive/30 rounded-lg transform rotate-12 translate-x-1/3 translate-y-1/3 z-0 clip-decoration" />
        
        <div className="max-w-6xl mx-auto relative z-10 scroll-mt-24">
          <AboutSection />
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-black_olive py-20 px-8 text-isabelline">
        <div className="max-w-6xl mx-auto">
          <QuoteSection
            quote="Healing takes courage, and we all have courage, even if we have to dig a little to find it."
            description="Therapy is not a one-size-fits-all solution. It's a journey. Let's walk that path together."
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full scroll-mt-24">
        <ServicesSection />
      </section>

      <Divider />

      {/* Rates Section */}
      <section id="rates" className="w-full bg-alabaster py-20 px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <RatesSection />
        </div>
      </section>

      {/* Second Quote Section */}
      <section className="w-full bg-black_olive py-20 px-8 text-isabelline">
        <div className="max-w-6xl mx-auto">
          <QuoteSection
            quote="You don't have to control your thoughts. You just have to stop letting them control you."
            description="With compassion and science-backed methods, healing becomes possible."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-alabaster py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <FAQSection />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </main>
  );
}