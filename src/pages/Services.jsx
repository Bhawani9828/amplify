import { Link } from "react-router-dom";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import TestimonialSection from "../components/TestimonialSection";

function Services() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]">
                  Our Services
                </h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        <ServiceSection />

        <FaqSection />

        <TestimonialSection />
      </main>
    </div>
  );
}

export default Services;
