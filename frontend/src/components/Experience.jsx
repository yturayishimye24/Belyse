import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

const OPPORTUNITIES = [
  {
    id: 1,
    title: "Scholarships",
    description: "We offer a range of scholarships designed to assist exceptional school students pursuing a technical or computer secondary education path in modern technology.",
    buttonText: "Read More",
    accentColor: "bg-blue-600", 
    bgColor: "bg-blue-50/60"     
  },
  {
    id: 2,
    title: "Internships",
    description: "Our #GoogleInterns and residents help build products that create opportunities for everyone. Bring your insight, imagination, and a healthy disregard for the impossible.",
    buttonText: "Read More",
    accentColor: "bg-red-500",
    bgColor: "bg-red-50/60"
  },
  {
    id: 3,
    title: "Apprenticeships",
    description: "Apprentices join different teams to gain practical skills while at Google, and study towards an externally-recognized premium professional qualification.",
    buttonText: "Read More",
    accentColor: "bg-yellow-500",
    bgColor: "bg-yellow-50/60"
  },
  {
    id: 4,
    title: "Programs",
    description: "Dive in to find programs that match your interests. Immerse yourself in software development and technical project work to prepare you for future placement options.",
    buttonText: "Read More",
    accentColor: "bg-green-600",
    bgColor: "bg-green-50/60"
  }
];

function Experience() {
  const pathRef = React.useRef(null);
  const toggleFullScreen = (event) => {
    const element = event.currentTarget.closest("[data-experience-card]");

    if (!element) return;

    if (document.fullscreenElement === element) {
      document.exitFullscreen();
    } else if (!document.fullscreenElement) {
      element.requestFullscreen().catch((error) => {
        console.error("Unable to enter fullscreen mode:", error);
      });
    }
  }
   useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // 1. Measure the exact length of the path
    const pathLength = path.getTotalLength();

    // 2. Hide the line completely on mount
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // 3. Play the drawing animation immediately
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: 'power2.inOut',
      delay: 0.2, // Short pause so the user sees it start drawing
    });
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      
      {/* Title Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sans text-gray-900 tracking-tight font-normal">
          <span className="relative inline-block ">My high school experiences</span>
           
        </h2>
      </div>

      {/* Accordion Layout Wrapper */}
      {/* group-hover cascade utility properties lets multiple panels cooperate simultaneously */}
      <div className="flex flex-col lg:flex-row items-stretch gap-4 w-full min-h-[420px] group">
        {OPPORTUNITIES.map((item) => (
          <div
            data-experience-card
            key={item.id}
            className={`relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 p-6 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              
              /* BASE MOBILE BEHAVIOR: standard stack rows */
              w-full h-auto
              
              /* DESKTOP ACCORDION ENGINE: flex growth multipliers */
              lg:w-1/4 lg:flex-1 
              hover:lg:flex-[2.2] hover:shadow-xl hover:shadow-gray-100/70
              
              /* Mute neighbor items when this specific panel is hovered */
              group-hover:opacity-85 hover:!opacity-100
              
              ${item.bgColor}`}
          >
            {/* Top Accent Color Bar Overlay */}
            <div className={`absolute top-0 left-0 right-0 h-2 w-full ${item.accentColor}`} />

            {/* Inner Top Content Envelope */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full">
              {/* Card Title */}
              <h3 className="text-2xl md:text-3xl font-sans text-gray-800 tracking-tight mb-4 mt-2">
                {item.title}
              </h3>

              {/* Collapsible Subtext Description */}
              {/* Handles text opacity and sizing configurations cleanly */}
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed transition-all duration-500 max-w-md
                
                /* Responsive Hidden Visibility Rules */
                opacity-100 max-h-[500px]
                lg:opacity-0 lg:max-h-0 lg:overflow-hidden
                
                /* Triggers expansion on wrapper node selection */
                path-to-parent-hover: parent element hover selector hooks
                .group:hover & { lg:group-hover:opacity-0 } 
                parent-element-hover: target specific item selection instance */
                [div:hover_&]:lg:opacity-100 [div:hover_&]:lg:max-h-[300px] [div:hover_&]:lg:mt-2"
              >
                {item.description}
              </p>
            </div>

            
            <div className="mt-8 flex justify-center lg:justify-start w-full">
              <button className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white text-blue-600 font-medium px-6 py-2 rounded-full text-sm shadow-sm transition-all duration-200 active:scale-95" onClick={toggleFullScreen}>
                {item.buttonText}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;