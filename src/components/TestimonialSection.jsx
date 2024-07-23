import { useEffect, useState } from "react";
import images from "../assets/imageImports";
import JOS from "jos-animation";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched services data:", data);
        setTestimonials(data);
      })
      .catch((error) => console.error("Error fetching the services:", error));
    JOS.init();
  }, []);

  return (
    <section className="testimonial-section">
      <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
              <h2 className="text-white md:text-[80px]">
                Positive feedback from our users
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white`}
                data-jos_animation={testimonial.animation}
                data-jos_delay={testimonial.delay}
              >
                <div className="block">
                  <img
                    src={images[testimonial.ratingImg]}
                    alt={testimonial.ratingAlt}
                    width={testimonial.ratingWidth}
                    height={testimonial.ratingHeight}
                  />
                </div>
                <p>{testimonial.quote}</p>
                <div className="flex items-center gap-x-4">
                  <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                    <img
                      src={images[testimonial.userImg]}
                      alt={testimonial.userAlt}
                      width={testimonial.userWidth}
                      height={testimonial.userHeight}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="block text-lg font-semibold leading-[1.6]">
                      {testimonial.userName}
                    </span>
                    <span className="block text-sm font-light leading-[1.4]">
                      {testimonial.userTitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
