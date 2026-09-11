import React, { useRef } from 'react';
import { gsap } from 'gsap';

const projects = [
  { id: 1, title: 'Panzer Collect', tag: 'Read More', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop' },
  { id: 2, title: 'BikeUp', tag: 'Read More', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop' },
  { id: 3, title: 'Basic Apparel', tag: 'Read More', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop' },
  { id: 4, title: 'Shaping Shoe', tag: 'Work with us', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop' },
  { id: 5, title: 'ARKK Project', tag: 'Read More', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop' },
  { id: 6, title: 'Bahne TML', tag: 'Read More', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop' },
];

export default function ClientsCarousel() {
  const cardsRef = useRef([]);

  const handleMouseEnter = (index) => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      if (i === index) {
        // Expand and straighten active hovered card
        gsap.to(card, {
          scaleY: 1.15,
          scaleX: 1.1,
          rotate: 0,
          zIndex: 20,
          duration: 0.4,
          ease: 'power3.out',
        });
      } else {
        // Slightly dim and push neighbor cards outward
        gsap.to(card, {
          scaleY: 0.95,
          scaleX: 0.95,
          opacity: 0.6,
          zIndex: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    });
  };

  const handleMouseLeave = () => {
    // Reset all cards to initial perspective stance
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.to(card, {
        scaleY: 1,
        scaleX: 1,
        rotate: -2,
        opacity: 1,
        zIndex: 10,
        duration: 0.4,
        ease: 'power3.out',
      });
    });
  };

  return (
    <section className="w-full py-20 bg-slate-100 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Some Of The community work <br />
          <span className="text-yellow-500 bg-yellow-50/60">I've commited myself to doing.</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
           I have been involved in various community projects, contributing my skills and expertise to make a positive impact. From organizing events to developing solutions, I am passionate about giving back and supporting initiatives that foster growth and collaboration.
        </p>
      </div>

      {/* Horizontal Cards Reel */}
      <div className="flex justify-center items-center gap-3 px-8 py-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative min-w-[200px] md:min-w-[240px] h-[360px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transform -rotate-2 transition-shadow hover:shadow-2xl flex-shrink-0 bg-slate-900"
          >
            {/* Background Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-blue-500 backdrop-blur-md text-white py-2 px-4 rounded-full text-center flex flex-col items-center">
              <span className="text-xs font-semibold tracking-wide">
               {project.tag}
              </span>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}