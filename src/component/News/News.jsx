import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../../assets/News/blog1.svg";
import blog2 from "../../assets/News/blog2.svg";
import blog3 from "../../assets/News/blog3.svg";
import show from "../../assets/News/showmore.png";
import imageUrl from "../../assets/News/new_bg.png";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";


function News() {
  const sliderRef = useState(null);

 const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          centerMode: false
        } 
      }
    ],
  };

  const blogPosts = [
    {
      image: blog1,
      title: "A Comprehensive Guide to Unravel the Mysteries of German Higher Education",
      description: "With its thriving culture, lengthy history, and prestigious educational institutions, Germany is a shining example of a country committed to higher education. Every year, thousands of students go to",
      blogLink: "https://www.quora.com/profile/Germanywale/Comprehensive-Guide-to-Unravel-the-Mysteries-of-Higher-Education-in-Germany-With-its-thriving-culture-lengthy-history",
      date: "28 April 2024"
    },
    {
      image: blog2,
      title: "From Campus to Cubicle: Navigating Idiosyncratic Germany's Employment Scene",
      description: "Germany, known for its distinctive fusion of innovation and tradition, is an alluring environment for recent graduates making the move from college to the business sector. Germany's employmen",
      blogLink: "https://www.quora.com/profile/Germanywale/From-Campus-to-Cubicle-Navigating-Germanys-Idiosyncratic-Employment-Scene-Ahoy-fresh-grads-Youve-come-to-the-corre",
      date: "15 May 2024"
    },
    {
      image: blog3,
      title: "Unveiling the Road to Success in Germany with a Post-Study Work Visa",
      description: "Amid the cobblestone streets and the whispers of history, are you lost and puzzled about how to find employment on the roads of Germany? Let me say - you are not",
      blogLink: "https://www.quora.com/profile/Germanywale/Unveiling-the-Road-to-Success-in-Germany-with-a-Post-Study-Work-Visa-Amid-the-cobblestone-streets-and-the-whispers-of-h",
      date: "22 June 2024"
    },
  ];

   return (
    <section className="bg-white py-12 relative overflow-hidden" id="news">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-0">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 20 }).map((_, i) => (
            <img key={i} src={imageUrl} alt="pattern" className="inline-block h-20" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with centered title and navigation */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center max-w-6xl w-full px-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center">
              Latest News From Our Blog
            </h2>
            <div className="flex gap-2 ml-4">
              <button
                aria-label="previous"
                onClick={() => sliderRef.current?.slickPrev?.()}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90"
              >
                <TbPlayerTrackPrevFilled size={20} />
              </button>
              <button
                aria-label="next"
                onClick={() => sliderRef.current?.slickNext?.()}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90"
              >
                <TbPlayerTrackNextFilled size={20} />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="flex items-center text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#EA7D06] to-[#D63815]">
              <img src={show} alt="Show more" className="w-4 h-4 mr-1" />
              Show More
            </button>
          </div>
        </div>

        {/* Blog posts slider */}
        <div className="w-full flex justify-center mt-6">
          <div className="w-full max-w-6xl px-2">
            <div className="relative">
              <Slider ref={sliderRef} {...sliderSettings}>
                {blogPosts.map((post, index) => (
                  <div key={index} className="px-2 h-full">
                    <div 
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                      onClick={() => window.open(post.blogLink, "_blank")}
                    >
                      <div className="p-3 flex-shrink-0">
                        <div className="rounded-lg overflow-hidden aspect-video">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-md sm:text-lg font-semibold mb-3 underline decoration-orange-500 decoration-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
                          {post.description.slice(0, 150)}...
                          <span className="text-blue-600 text-sm ml-1 border-b border-blue-600">
                            Read More
                          </span>
                        </p>
                        
                        <div className="flex justify-between items-center text-sm sm:text-base mt-auto">
                          <span className="text-gray-500">PRESS RELEASE</span>
                          <span className="text-gray-400">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default News;