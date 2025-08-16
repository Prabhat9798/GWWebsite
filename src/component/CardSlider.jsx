import React, { useState, useEffect, useRef } from 'react';

// --- Mock Data ---
// In a real application, you would fetch this data from an API.
const testimonials = [
  {
    quote: "Won't lie. Was a little skeptical about Germanywale in the start. But it proved me wrong in every way possible.",
    name: "Shagun Shah",
    title: "MSc in Data Science",
    image: "https://placehold.co/100x100/EED8D6/4F46E5?text=SS",
    logo: "https://placehold.co/150x50/ffffff/000000?text=FAU+Logo",
  },
  {
    quote: "The mentors are easy to reach and talk to, the process is simplified and their advice on writing SOPs and shortlisting universities.",
    name: "Ayush Baid",
    title: "Masters in Management",
    image: "https://placehold.co/100x100/D6EED8/4F46E5?text=AB",
    logo: "https://placehold.co/150x50/ffffff/000000?text=EBS+Logo",
  },
  {
    quote: "Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine.",
    name: "Shweta Kumar",
    title: "Masters in Non-Financials Intensive",
    image: "https://placehold.co/100x100/D8D6EE/4F46E5?text=SK",
    logo: "https://placehold.co/150x50/ffffff/000000?text=Ohm+Logo",
  },
  {
    quote: "The entire team is very professional and helpful. They guided me through every step of the application process.",
    name: "Rohan Verma",
    title: "BSc in Computer Science",
    image: "https://placehold.co/100x100/EED6D6/4F46E5?text=RV",
    logo: "https://placehold.co/150x50/ffffff/000000?text=TUM+Logo",
  },
  {
    quote: "I highly recommend their services to anyone looking to study in Germany. The support was exceptional.",
    name: "Priya Singh",
    title: "MBA",
    image: "https://placehold.co/100x100/D6EEEC/4F46E5?text=PS",
    logo: "https://placehold.co/150x50/ffffff/000000?text=LMU+Logo",
  },
   {
    quote: "A seamless experience from start to finish. Their expertise is unmatched and they truly care about student success.",
    name: "Ankit Sharma",
    title: "Masters in Automotive Engineering",
    image: "https://placehold.co/100x100/EED8D6/4F46E5?text=AS",
    logo: "https://placehold.co/150x50/ffffff/000000?text=RWTH+Logo",
  },
];

// --- SVG Icons ---
// Using inline SVGs for icons to avoid external dependencies.
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const PlayIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);


// --- Testimonial Card Component ---
// A reusable component for displaying a single testimonial.
const TestimonialCard = ({ quote, name, title, image, logo }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-xl shadow-lg h-full flex flex-col border border-gray-200/80">
      <div className="p-6 flex-grow">
        <p className="text-gray-600 text-lg">"{quote}"</p>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-500">{title}</p>
          </div>
        </div>
        <img src={logo} alt="University Logo" className="mt-6 h-10 object-contain" />
      </div>
      <div className="bg-orange-600 text-white rounded-b-xl px-6 py-4 mt-auto">
        <a href="#" className="flex items-center justify-center space-x-2 font-semibold hover:opacity-80 transition-opacity">
          <PlayIcon className="w-6 h-6" />
          <span>Watch their story</span>
        </a>
      </div>
    </div>
  </div>
);

// --- Main Slider Component ---
export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Function to determine how many items are visible based on screen width
  const getVisibleItems = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 640) return 2; // sm
    return 1; // mobile
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  // Update visible items on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      // Reset index on resize to avoid blank spaces
      setCurrentIndex(0); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the maximum index to prevent sliding into empty space
  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="bg-slate-50 font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-600">
            What Our Students Speak
          </h2>
          {/* Navigation Buttons */}
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white border border-orange-200 text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full bg-white border border-orange-200 text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="sm:hidden flex justify-center space-x-4 mt-8">
           <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white border border-orange-200 text-orange-600 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - 1} // On mobile, it's one by one
              className="p-3 rounded-full bg-white border border-orange-200 text-orange-600 disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </button>
        </div>
      </div>
    </div>
  );
}
