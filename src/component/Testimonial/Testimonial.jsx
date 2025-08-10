import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestiCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl mx-2 flex flex-col h-full min-h-[450px]">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 pt-14 relative">
        <div className="absolute top-4 left-6">
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        <div className="text-gray-700 text-sm leading-relaxed min-h-[96px] mt-16">
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>

      <div className="px-6 py-4 flex-1">
        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
        <p className="text-gray-500 italic text-sm">{item.course}</p>

        <div className="mt-3 h-12">
          <img
            src={item.university}
            alt="university"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 flex items-center justify-center gap-3 cursor-pointer hover:opacity-90"
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
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
    ],
  };

  const hotelCards = [
    {
      imageSrc: "https://picsum.photos/seed/purvanshi/200",
      name: "Purvanshi Sharma",
      para1: "The best part about the Germanywale team is that they don't",
      para2: "treat you as a customer.",
      videoLink: "https://www.instagram.com/",
      course: "MSc in Data Science",
      university: "https://placehold.co/120x50?text=University",
    },
    {
      imageSrc: "https://picsum.photos/seed/shagun/201",
      name: "Shagun Shah",
      para1: "Won't lie. Was a little skeptical about Germanywale in the start.",
      para2: "But it proved me wrong in every way possible.",
      videoLink: "https://www.youtube.com/",
      course: "MSc in Data Science",
      university: "https://placehold.co/120x50?text=University",
    },
    {
      imageSrc: "https://picsum.photos/seed/ayush/202",
      name: "Ayush Baid",
      para1: "The mentors are easy to reach and talk to, the process is simplified",
      para2: "and their advice on writing SOPs and shortlisting universities.",
      videoLink: "https://www.instagram.com/",
      course: "Masters in Management",
      university: "https://placehold.co/120x50?text=University",
    },
  ];

  const canRenderSlider =
    typeof Slider === "function" || (Slider && typeof Slider === "object");

  return (
    <div className="mb-4 py-8">
      <div className="heading flex items-center justify-center gap-4">
        <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent">
          What Our Students Say
        </h3>
        <div className="flex gap-2">
          <button
            aria-label="previous"
            onClick={() => sliderRef.current?.slickPrev?.()}
            className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90"
          >
            ◀
          </button>
          <button
            aria-label="next"
            onClick={() => sliderRef.current?.slickNext?.()}
            className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-6xl px-2">
          <div className="relative">
            {canRenderSlider ? (
              <Slider ref={sliderRef} {...sliderSettings}>
                {hotelCards.map((card, index) => (
                  <div key={index} className="px-2">
                    <TestiCard item={card} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                The slider component failed to load. Please ensure{" "}
                <code>react-slick</code> and <code>slick-carousel</code> are
                installed and imported correctly.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonal;
// add more data and make the card little small and also the next and previous button move to the extreme right of the section