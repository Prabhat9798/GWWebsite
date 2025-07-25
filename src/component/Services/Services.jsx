import React, { useRef } from 'react'
import video2 from "./video2.mp4"
import video1 from "./video1.mp4"
import LOR from "./LOR.mp4"
import unapp from "./universityapplication.mp4"
import university from "./university.mp4"
import visa from "./visa.mp4"
import courseselection from "./courseselection.mp4"
import travel from "./travel.mp4"

const videos = [
  { src: video1, title: 'Free Counselling' },
  { src: video2, title: 'Statement of Purpose' },
  { src: unapp, title: 'Curriculum Vitae' },
  { src: university, title: 'University Application' },
  { src: LOR, title: 'Letter of Recommendation' },
  { src: courseselection, title: 'Course Selection' },
  { src: travel, title: 'Travel Arrangement' },
  { src: visa, title: 'Visa Assistance' },
];

const Services = () => {
  // Create refs for each video
  const videoRefs = useRef([]);

  // Handlers for hover play/pause
  const handleMouseEnter = idx => {
    const vid = videoRefs.current[idx];
    if (vid) vid.play();
  };
  const handleMouseLeave = idx => {
    const vid = videoRefs.current[idx];
    if (vid) vid.pause();
    if (vid) vid.currentTime = 0;
  };

  return (
    <div className="mb-4">
      <div className="heading flex items-center justify-center">
        <h1 
                      className=" text-center text-4xl font-bold bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent"
>Our Services</h1>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-2">
          {videos.map((video, idx) => (
            <div
              className="video-card flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-white"
              key={video.src}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <video
                ref={el => (videoRefs.current[idx] = el)}
                src={video.src}
                muted
                loop
                className="w-full h-40 sm:h-36 md:h-44 lg:h-48 rounded-lg bg-gray-100 object-cover"
                preload="none"
              />
              <h3 className="text-center text-lg font-semibold mt-4 mb-2">
                {video.title}
              </h3>
              <button
                className="apply-btn mt-2 px-4 py-2 text-white font-semibold transition cursor-pointer"
                style={{
                  background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                  borderRadius: "10px",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services