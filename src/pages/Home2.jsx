import hero2 from "../assets/img/simple/hero2.png";
import JOS from "jos-animation";
import BrandSlider from "../components/BrandSlider";
import ServiceSection from "../components/ServiceSection";
import ContentSections from "../components/ContentSections";
import FaqSection from "../components/FaqSection";
import PricingSection from "../components/PricingSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import FunFactSection from "../components/FunFactSection";

function Home2() {
  useEffect(() => {
    JOS.init();
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              {/* Hero Content */}
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h1 className="jos slide-from-bottom md:text-[120px] mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]">
                  Simplify your SaaS solution with AI
                </h1>
                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                  Our AI SAAS tool is a cloud-based software delivery model. It
                  helps businesses forecast demand for products and services and
                  optimize inventory management and supply chain operations.
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <a
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                  >
                    Get started for free
                  </a>
                  <a
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              {/* Hero Content */}

              {/* Hero Image */}
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <img
                  src={hero2}
                  alt="hero-dashboard"
                  width={1296}
                  height={640}
                  className="h-auto w-full"
                />
              </div>
              {/* Hero Image */}

              <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20" />
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                <p className="text-lg">
                  Companies of all sizes trust us to find AI SaaS critical to
                  their growth and innovation
                </p>
              </div>

              <BrandSlider />
            </div>

            <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

            <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div>
          </div>
        </section>

        <ServiceSection />

        <ContentSections />

        <FunFactSection />

        <PricingSection />

        <FaqSection />

        <TestimonialSection />

        <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>
        {/* Body Background Shape 2 */}
        <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>

      <Footer />
    </div>
  );
}

export default Home2;
