import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestiCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-md mx-1 flex flex-col h-full min-h-[350px] sm:min-h-[380px]">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 pt-12 sm:pt-16 relative">
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        <div className="text-gray-700 text-sm md:text-base leading-relaxed min-h-[80px] mt-12">
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>

      <div className="px-4 py-3 flex-1">
        <h3 className="font-bold text-base md:text-lg text-gray-900">{item.name}</h3>
        <p className="text-gray-500 italic text-sm md:text-base">{item.course}</p>

        <div className="mt-2 h-10">
          <img
            src={item.university}
            alt="university"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 text-sm md:text-base"
        onClick={() => window.open(item.videoLink, "_blank")}
      >
        <span className="font-medium">▶ Watch their story</span>
      </div>
    </div>
  );
};

function Testimonal() {
  const sliderRef = useRef(null);

 const sliderSettings = {
    // arrows: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    infinite: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

   const testimonials = [
    {
      imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Sharma",
      para1: "Germanywale made my dream of studying in Germany a reality.",
      para2: "Their SOP guidance was exceptional!",
      videoLink: "#",
      course: "MSc Computer Science",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TU_Munich_logo.svg/1200px-TU_Munich_logo.svg.png",
    },
    {
      imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Patel",
      para1: "From university shortlisting to visa approval,",
      para2: "they supported me at every step.",
      videoLink: "#",
      course: "MBA in International Business",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mannheim_University_Logo.svg/1200px-Mannheim_University_Logo.svg.png",
    },
    {
      imageSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Neha Gupta",
      para1: "Their LOR templates helped me secure",
      para2: "admission to my dream university.",
      videoLink: "#",
      course: "MSc Data Science",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/RWTH_Aachen_University_Logo.svg/1200px-RWTH_Aachen_University_Logo.svg.png",
    },
    {
      imageSrc: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Arjun Singh",
      para1: "The visa documentation support was",
      para2: "detailed and extremely helpful.",
      videoLink: "#",
      course: "MS Mechanical Engineering",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_TU_Berlin.svg/1200px-Logo_TU_Berlin.svg.png",
    },
    {
      imageSrc: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Ananya Reddy",
      para1: "Germanywale's university application",
      para2: "checklist kept me organized.",
      videoLink: "#",
      course: "MSc Biotechnology",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/University_of_Heidelberg_logo.svg/1200px-University_of_Heidelberg_logo.svg.png",
    },
    {
      imageSrc: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Vikram Joshi",
      para1: "Their course selection advice matched",
      para2: "my background perfectly.",
      videoLink: "#",
      course: "MSc Electrical Engineering",
      university: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/KIT_Logo.svg/1200px-KIT_Logo.svg.png",
    },
  ];

  return (
    <div className="mb-4 py-6 sm:py-8 px-4">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <div className="w-full max-w-6xl relative">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center sm:text-left mb-4 sm:mb-0">
              What Our Students Say
            </h3>
            <div className="flex gap-2 sm:absolute sm:right-0">
              <button
                aria-label="previous"
                onClick={() => sliderRef.current?.slickPrev?.()}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 hidden sm:block"
              >
                ◀
              </button>
              <button
                aria-label="next"
                onClick={() => sliderRef.current?.slickNext?.()}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 hidden sm:block"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((card, index) => (
              <div key={index} className="px-2">
                <TestiCard item={card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonal;