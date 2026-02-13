import { PageHead } from "@/components/PageHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { siteInfo } from "@/data/siteInfo";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { RegionalMap } from "@/components/home/RegionalMap";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <PageHead
        fullTitle={siteInfo.meta.defaultTitle}
        description={siteInfo.meta.defaultDescription}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesPreview />
        <RegionalMap />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
