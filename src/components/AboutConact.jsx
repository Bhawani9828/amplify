import abcontact from "../assets/img/th-1/about-contact-img.jpg";
function AboutConact() {
  return (
    <div>
      <section id="about-conact">
        <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
              <div
                className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
                data-jos_animation="fade-right"
              >
                <img
                  src={abcontact}
                  alt="about-contact-img"
                  width={526}
                  height={550}
                  className="h-auto w-full"
                />
              </div>

              <div
                className="jos order-1 md:order-2"
                data-jos_animation="fade-down"
              >
                <div className="mb-6 md:max-w-max">
                  <h2 className="text-white lg:text-[80px] md:text-[41px]  text-[24px]">
                    We always want to connect our clients
                  </h2>
                </div>

                <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    AI accessible and beneficial for organizations, and we look
                    forward to partnering with businesses to achieve their AI
                    goals.
                  </p>
                </div>
                <ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
                  <li className="flex flex-col gap-x-2 leading-tight text-[#C339C3] lg:flex-row lg:leading-normal">
                    Website:
                    <a
                      href="https://www.example.com"
                      className="text-white hover:text-[#C339C3]"
                    >
                      www.example.com
                    </a>
                  </li>
                  <li className="flex flex-col gap-x-2 leading-tight text-[#C339C3] lg:flex-row lg:leading-normal">
                    Email:
                    <a
                      href="mailto:yourmail@mail.com"
                      className="text-white hover:text-[#C339C3]"
                    >
                      yourmail@mail.com
                    </a>
                  </li>
                  <li className="flex flex-col gap-x-2 leading-tight text-[#C339C3] lg:flex-row lg:leading-normal">
                    Phone:
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-[#C339C3]"
                    >
                      (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutConact;
