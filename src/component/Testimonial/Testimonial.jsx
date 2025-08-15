import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all testimonial images
import purvanshi from "../../assets/studentimg/1_preview_rev_1.png";
import shagun from "../../assets/studentimg/ShagunShah_preview_rev_1 (1).png";
import ayush from "../../assets/studentimg/3_preview_rev_1.png";
import shweta from "../../assets/studentimg/6_preview_rev_1.png";
import abhay from "../../assets/studentimg/7_preview_rev_1.png";
import naveen from "../../assets/studentimg/naveen1.png";
import akansha from "../../assets/studentimg/AkankshaMourya_preview_rev_1.png";
import arshiya from "../../assets/studentimg/11_preview_rev_1.png";
import Taranjit from "../../assets/studentimg/Taranjeet (2)_preview_rev_1.png";
import kripal from "../../assets/studentimg/9_preview_rev_1.png";
import prasad from "../../assets/studentimg/prasad.png";
import antony from "../../assets/studentimg/5_preview_rev_1.png";
import shodhan from "../../assets/Updated-Testimonial/shodhanupdated.png";

// Import university logos
import purvanshiuniversity from "../../assets/Updated-Testimonial/purvanshiuniversity.png";
import shagununiversity from "../../assets/Updated-Testimonial/shagununiversity.png";
import ayushuniversity from "../../assets/Updated-Testimonial/ayushuniversity.png";
import naveen_university from "../../assets/Updated-Testimonial/naveenuniversity.png";
import akanshauniversity from "../../assets/Updated-Testimonial/akanshauniversity.png";
import shwetaUniversity from "../../assets/Updated-Testimonial/shwetauniversity.png";
import kripaluniversity from "../../assets/Updated-Testimonial/kripaluniversity.gif";
import abhayuniversity from "../../assets/Updated-Testimonial/abhayuniversity.png";
import taranjituniversity from "../../assets/Updated-Testimonial/taranjituniversity.png";
import prasaduniversity from "../../assets/Updated-Testimonial/prasaduniversity.png";
import arshiyauniversity from "../../assets/Updated-Testimonial/arshiyauniversity.png";
import antonyuniversity from "../../assets/Updated-Testimonial/antonyuniversity.png";

const TestiCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-md mx-1 flex flex-col h-full min-h-[400px]">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 pt-20 relative">
        <div className="absolute -top-0 left-4 w-24 h-24">
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-gray-700 text-md leading-relaxed min-h-[80px] mt-6">
          <p>{item.para1}</p>
          <p>{item.para2}</p>
        </div>
      </div>

      <div className="px-4 py-3 flex-1">
        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
        <p className="text-gray-500 italic text-md">{item.course}</p>

        <div className="mt-2 h-10">
          <img
            src={item.university}
            alt="university"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 text-sm"
        onClick={() => window.open(item.videoLink, "_blank")}
      >
        <span className="font-medium text-md">▶ Watch their story</span>
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
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          centerMode: false
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0px'
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0px'
        } 
      }
    ],
  };

  const testimonials = [
    {
      imageSrc: purvanshi,
      name: "Purvanshi Sharma",
      para1: "The best part about the Germanywale team is that they don't",
      para2: "treat you as a customer.",
      videoLink: "https://www.instagram.com/p/CXsiGOVvMjI/?igsh=MTEyZ2E5b3Z5b2xqdA==",
      course: "MSc in Data Science",
      university: purvanshiuniversity,
    },
    {
      imageSrc: shagun,
      name: "Shagun Shah",
      para1: "Won't lie. Was a little skeptical about Germanywale in the start.",
      para2: "But it proved me wrong in every way possible.",
      videoLink: "https://www.youtube.com/@germanywale_official/featured",
      course: "MSc in Data Science",
      university: shagununiversity,
    },
    {
      imageSrc: ayush,
      name: "Ayush Baid",
      para1: "The mentors are easy to reach and talk to, the process is simplified",
      para2: "and their advice on writing SOPs and shortlisting universities.",
      videoLink: "https://www.instagram.com/p/CcpG3vktcIC/?igsh=MWVtazVtN2U3ODl1bA==",
      course: "Masters in Management",
      university: ayushuniversity,
    },
    {
      imageSrc: shweta,
      name: "Shweta Kumar",
      para1: "Germanywale is one of the best consulting firms I have come across.",
      para2: "Their advice and service were very genuine.",
      course: "Masters in Non-Financials Intensive",
      videoLink: "https://www.instagram.com/p/C1Gy9xuLP6J/?igsh=MXkybmt3cDloNjAyYg==",
      university: shwetaUniversity,
    },
    {
      imageSrc: abhay,
      name: "Abhay Ahuja",
      para1: "The whole process was very transparent it marked my expectations.",
      para2: "I was kept well informed about the ongoing developments.",
      videoLink: "https://youtube.com/shorts/znoo0fz9ioA?si=sCzDbJrLX5DXeDpR",
      university: abhayuniversity,
      course: "Masters in Agriculture, Ecology and Societies",
    },
    {
      imageSrc: naveen,
      name: "Naveen Verma",
      para1: "My experience with Germanywale has been nothing short of my high expectations.",
      para2: "Their flexibility with assigning mentors is excellent",
      videoLink: "https://youtu.be/dTmGfOmDpkk?si=PMdvZk4QSdaa98CH",
      university: naveen_university,
      course: "MSc in Biological Resources",
    },
    {
      imageSrc: akansha,
      name: "Akanksha Mourya",
      para1: "Genuinely I was very worried about my application before joining Germanywale.",
      para2: "Team always gives me confidence and assurance that I will get an admit.",
      videoLink: "https://youtu.be/yFigyCOADqQ?si=kV5zBjVhyc2_gG-v",
      university: akanshauniversity,
      course: "Master's in molecular life science",
    },
    {
      imageSrc: Taranjit,
      name: "Taranjit Kaur",
      para1: "I would never forget the key role played by Team Germanywale in university shortlisting.",
      para2: "They were available beyond the time, no matter what type of concern I have.",
      videoLink: "https://www.instagram.com/p/CkRB7KdLhTW/?igsh=bmw5aG56dG15emJu",
      university: taranjituniversity,
      course: "International Management and Leadership (MA)",
    },
    {
      imageSrc: kripal,
      name: "Kripal Kishor",
      para1: "Whenever I had a doubt, the team was always there to help me out.",
      para2: "The team gave me hope and proper guidance and motivated me a lot to go beyond.",
      videoLink: "https://youtu.be/3TiiJCuJHoE?si=xMHmDDw8e10lz9uc",
      university: kripaluniversity,
      course: "Masters in Intelligent Manufacturing",
    },
    {
      imageSrc: prasad,
      name: "Prasad Patil",
      para1: "Germanywale provided exceptional support and engagement, promptly",
      para2: "addressing all my questions and doubts. Their patience and reliability eased my journey.",
      videoLink: "https://youtube.com/shorts/Lo2OrJkqmR0?si=iPjX7u43FKzg6HKu",
      university: prasaduniversity,
      course: "Masters in Wind energy Engineering",
    },
    {
      imageSrc: arshiya,
      name: "Arshiya Sharma",
      para1: "Saurabh and the entire team were in touch with me consistently the whole time",
      para2: "and were always there if I had any doubts. I would highly recommend Germanywale to everyone.",
      videoLink: "https://youtu.be/kYGHHRW0JKA?si=CrF9YAbS6DXdlxu2",
      university: arshiyauniversity,
      course: "Master's in International Business- Focus on healthcare management",
    },
    {
      imageSrc: antony,
      name: "Antony Reddy",
      para1: "My entire application process with Germanywale has been extremely smooth.",
      para2: "Everyone in the team is exceptional and very helpful.",
      videoLink: "https://youtube.com/shorts/xVFs-veJimQ?si=Mndtadq8RinUXfCR",
      university: antonyuniversity,
      course: "Master of Business Administration",
    },
    {
      imageSrc: shodhan,
      name: "Shodhan",
      para1: "Choosing Germanywale for my study abroad journey was the best decision I ever made,",
      para2: "as their personalized guidance led me to my dream university with immense support.",
      videoLink: "https://www.instagram.com/p/C6lA9JeOWm_/?igsh=MWdybDB5N2N4YWV1dQ==",
      university: shagununiversity,
      course: "Master's in Electromobility",
    }
  ];

  return (
    <div className="container mb-4 py-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center justify-center max-w-6xl w-full px-4">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center">
            What Our Students Say
          </h3>
          <div className="flex gap-2 ml-4">
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
      </div>

      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-6xl px-2">
          <div className="relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((card, index) => (
                <div key={index} className="px-2 ">
                  <TestiCard item={card} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonal;