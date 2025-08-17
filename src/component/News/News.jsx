import React, { useState, useEffect, useRef } from 'react';
import blog1 from "../../assets/News/blog1.svg";
import blog2 from "../../assets/News/blog2.svg";
import blog3 from "../../assets/News/blog3.svg";

// --- Mock Data ---
// Using your provided data structure with local images
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
  {
    image: blog1,
    title: "Top 5 Cities in Germany for International Students",
    description: "Germany is a popular destination for international students, offering world-class education, vibrant culture, and excellent career opportunities. Here are the top cities to consider.",
    blogLink: "#",
    date: "05 July 2024"
  },
];

// --- SVG Icons ---
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- Reusable Blog Card Component ---
const BlogPostCard = ({ post }) => (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2">
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
);


// --- Main News Component ---
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  // --- Autoplay Logic ---
  useEffect(() => {
    // Set up an interval to advance the slide every 3 seconds
    const interval = setInterval(() => {
      if (!isHovering) {
        // When it reaches the end, loop back to the start, otherwise go to the next slide
        setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
      }
    }, 3000); // 3-second interval

    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [isHovering, currentIndex]); // Rerun effect if hover state or index changes


  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="bg-white py-12 relative overflow-hidden" id="news">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-0">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 20 }).map((_, i) => (
            <img key={i} src="https://placehold.co/200x80/ffffff/ffffff?text=." alt="pattern" className="inline-block h-20 opacity-50" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center max-w-6xl w-full px-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent text-center">
              Latest News From Our Blog
            </h2>
            <div className="flex gap-2 ml-4">
              <button
                aria-label="previous"
                onClick={prevSlide}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 transition-opacity"
              >
                <ChevronLeftIcon />
              </button>
              <button
                aria-label="next"
                onClick={nextSlide}
                className="p-2 rounded-full bg-gradient-to-r from-[#FF9422] to-[#D63715] text-white hover:opacity-90 transition-opacity"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Blog posts slider */}
        <div 
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out -mx-2"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}