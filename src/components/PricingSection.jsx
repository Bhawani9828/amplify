import { useEffect, useState } from "react";
import JOS from "jos-animation";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    JOS.init();
  }, []);

  return (
    <section className="pricing-section">
      <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos mb-10 text-center lg:mb-12">
            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
              <h2 className="text-[80px]">
                Cost-effectively build any software
              </h2>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="jos flex justify-center" data-jos_animation="fade">
              <div className="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold">
                <button
                  className={`tab-button price-button ${
                    activeTab === "monthly" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`tab-button price-button ${
                    activeTab === "annually" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("annually")}
                >
                  Annually
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-16 xl:mt-20">
              <ul
                className={`tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3 ${
                  activeTab === "monthly" ? "" : "hidden"
                }`}
              >
                {/* Monthly Price Items */}
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Beginner
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 10 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $25<span className="text-lg font-semibold">/Per month</span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    This is an excellent option for people & small businesses
                    who are starting out.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Starter
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 50 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $89<span className="text-lg font-semibold">/Per month</span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    This plan is suitable for e-commerce stores as well as
                    professional blogs.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Pro
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 100 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $199
                    <span className="text-lg font-semibold">/Per month</span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Ideal for handling complicated projects enterprise-level
                    projects, and websites.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
              </ul>
              <ul
                className={`tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3 ${
                  activeTab === "annually" ? "" : "hidden"
                }`}
              >
                {/* Annual Price Items */}
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Beginner
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 10 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $240<span className="text-lg font-semibold">/Per year</span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    This is an excellent option for people & small businesses
                    who are starting out.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Starter
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 50 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $960<span className="text-lg font-semibold">/Per year</span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    This plan is suitable for e-commerce stores as well as
                    professional blogs.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Pro
                  </h3>
                  <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Up to 100 members
                  </span>
                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
                  <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                    $1800
                    <span className="text-lg font-semibold leading-none">
                      /Per year
                    </span>
                  </h4>
                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Ideal for handling complicated projects enterprise-level
                    projects, and websites.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Choose the plan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
