import React, {useState, useEffect, useCallback} from "react";
import { useSwipeable } from "react-swipeable";
import "./Home.scss";

export default function Home() {
  const Pattern1 = () => (
    <svg
      width="135"
      height="61"
      xmlns="http://www.w3.org/2000/svg"
      className="pattern"
    >
      <path
        d="M98.882 60.408c10.951 0 19.618-4.864 25.999-14.593 6.38-9.728 9.571-23.054 9.571-39.977h-29.19c-.633 3.439-1.9 6.199-3.8 8.28-1.902 2.082-4.662 3.123-8.283 3.123-3.258 0-6.788-.86-10.59-2.58a354.773 354.773 0 01-12.354-5.905C65.8 6.54 60.89 4.594 55.505 2.92 50.119 1.245 44.214.408 37.787.408c-11.585 0-20.704 4.887-27.356 14.66C3.778 24.843.452 38.1.452 54.843h29.19c.633-3.348 2.059-6.063 4.276-8.144 2.218-2.082 5.182-3.123 8.893-3.123 3.077 0 6.471.838 10.182 2.512a437.483 437.483 0 0112.49 5.905c4.616 2.262 9.708 4.23 15.274 5.905 5.566 1.674 11.608 2.511 18.125 2.511z"
        fill="#F94F4F"
        fillRule="nonzero"
      />
    </svg>
  );
  const Pattern2 = () => (
    <svg
      className="pattern"
      width="134"
      height="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.43 0c10.951 0 19.618 4.864 25.999 14.593C130.809 24.32 134 37.647 134 54.57h-29.19c-.633-3.439-1.9-6.199-3.8-8.28-1.902-2.082-4.662-3.123-8.283-3.123-3.258 0-6.788.86-10.59 2.58a354.77 354.77 0 00-12.354 5.905c-4.435 2.217-9.345 4.162-14.73 5.837C49.667 59.163 43.762 60 37.335 60 25.75 60 16.631 55.113 9.98 45.34 3.326 35.565 0 22.307 0 5.565h29.19c.633 3.348 2.059 6.063 4.276 8.144 2.218 2.082 5.182 3.123 8.893 3.123 3.077 0 6.471-.838 10.182-2.512a437.497 437.497 0 0012.49-5.905c4.616-2.262 9.708-4.23 15.274-5.905C85.871.837 91.913 0 98.43 0z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
  const NextSlideBtn = () => (
    <svg onClick={nextSlide} width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#F94F4F" fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="19.5" />
        <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
      </g>
    </svg>
  );
  const BackSlideBtn = () => (
    <svg onClick={prevSlide} width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <g
        transform="matrix(-1 0 0 1 40 0)"
        stroke="#F94F4F"
        fill="none"
        fillRule="evenodd"
      >
        <circle cx="20" cy="20" r="19.5" />
        <path strokeWidth="2" d="M17.5 15l5 5-5 5" />
      </g>
    </svg>
  );
  const dataSlide = [
    {
      id: 1,
      title: 'Lean Product Roadmap',
      year: '2019 Project',
      img: `img/image-slide-1.jpg`
    },
    {
      id: 2,
      title: 'New Majestic Hotel',
      year: '2018 Project',
      img: `img/image-slide-2.jpg`
    },
    {
      id: 3,
      title: 'Crypto Dashboard',
      year: '2016 Project',
      img: `img/image-slide-3.jpg`
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === dataSlide.length - 1 ? 0 : prev + 1));
  }, [dataSlide.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? dataSlide.length - 1 : prev - 1));
  };
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });
  useEffect(() => {
    
    const slideElements = document.querySelectorAll(".slide");

    // Reset opacity to 0 when the component mounts
    slideElements.forEach((slide) => (slide.style.opacity = 0));

    // Apply the active class with a delay to trigger the transition
    setTimeout(() => {
      slideElements[currentSlide].style.opacity = 1;
    }, 50);
  }, [currentSlide, nextSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
  
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, nextSlide]); 

  const HeroSection = () => (
    <section className="hero_wrap">
      <div className="hero_img"></div>
      <div className="hero_information">
        <h1>
          Branding & <br /> website design agency
        </h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <a href="#about">Learn More</a>
      </div>
    </section>
  );
  const DesignSection = () => (
    <section className="design_wrap" id="about">
      <div className="design_img"></div>
      <div className="design_information">
        <Pattern1 />
        <h1>
          <span>Design</span> is strategic.
        </h1>
        <p>
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </p>
        <a href="/">Schedule a Call</a>
      </div>
    </section>
  );
  const ServicesSection = () => (
    <section className="services_wrap" id="service">
      <h1>Our approach for creating a winning brand</h1>
      <div className="services_information">
        <div className="element">
          <span>01</span>
          <h4>Brand Strategy</h4>
          <p>
            Brand strategy is critical for long-term success. Outshining
            competitors and capturing the target audience are key.
          </p>
        </div>
        <div className="element">
          <span>02</span>
          <h4>Brand Design</h4>
          <p>
            Keeping the brand design unique and meaningful helps in
            communicating the brand’s timeless value effectively.
          </p>
        </div>
        <div className="element">
          <span>03</span>
          <h4>Web Design</h4>
          <p>
            A beautifully crafted website is the best tool for brand awareness,
            and ultimately results in increased revenues.{" "}
          </p>
        </div>
      </div>
    </section>
  );
  const SliderSection = () => (
    <section {...handlers} className="slider_wrap" id="project">
      <div className="controll">
        <Pattern2 />
        <h1>Brand naming & guidelines</h1>
        <div className="btn_wrap">
          <BackSlideBtn />
          <NextSlideBtn />
        </div>
      </div>
      <div className="slides_wrap">
        {dataSlide.map((slides, index) => (
          <div  className={`slide ${index === currentSlide ? "active" : ""}`} key={slides.id}>
            <img src={slides.img} alt="Project" />
            <div className="information">
              <h4>{slides.title}</h4>
              <p>{slides.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  return (
    <main>
      <HeroSection />
      <DesignSection />
      <ServicesSection />
      <SliderSection />
    </main>
  );
}
