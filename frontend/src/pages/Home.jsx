import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
//images imports
import BrownCench from "../../src/assets/images/BrownCench.jpeg";
import cench from "../../src/assets/images/Cench.jpeg";
import { useRef } from "react";
import Chelsea from "../../src/assets/images/Chelsea.webp";
import LOGO from "../../src/assets/images/LOGO.png";


//components imports
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import RoleSlider from "../components/RolesSlider.jsx";
import Footer from "../components/Footer.jsx";
import NewsletterCard from "../components/Contact.jsx";

function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleMoveToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMoveToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMoveToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMoveToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="hidden xl:flex justify-between items-center px-16 py-6">
        <div className="text-3xl font-medium cursor-default"><img src={LOGO} alt="Profile" className="w-[100px] h-auto object-cover" /></div>

        <div>
          <ul className="flex gap-8 text-2xl">
            <li>
              <a
                onClick={handleMoveToAbout}
                href="#about"
                className="hover:text-gray-500 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleMoveToExperience}
                href="#experience"
                className="hover:text-gray-500 transition-all duration-300"
              >
                Experience
              </a>
            </li>
            <li>

              <a
                onClick={handleMoveToProjects}
                href="#projects"
                className="hover:text-gray-500 transition-all duration-300"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="group flex items-center gap-2 border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">
            <a href="#contact" onClick={handleMoveToContact}>
              Get in touch
            </a>

            <svg
              width="15"
              height="10"
              viewBox="0 0 13 10"
              className="group-hover:translate-x-1 transition-all duration-300"
            >
              <path
                d="M1,5 L11,5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              ></path>

              <polyline
                points="8 1 12 5 8 9"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              ></polyline>
            </svg>
          </button>
        </div>
      </nav>

      <nav className="flex xl:hidden justify-between items-center px-8 py-6 relative">
        <div className="text-2xl font-medium"><img src={LOGO} alt="Profile" className="" /></div>

        <div>
          <div
            className="flex flex-col gap-1 cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-8 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          <div
            className={`absolute right-8 top-20 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 py-4 px-8" : "max-h-0 py-0 px-8"
            }`}
          >
            <ul className="flex flex-col gap-4 text-center text-lg">
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    toggleMenu();
                    handleMoveToAbout();
                  }}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  onClick={() => {
                    toggleMenu();
                    handleMoveToExperience();
                  }}
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => {
                    toggleMenu();
                    handleMoveToProjects();
                  }}
                >
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="profile"
        className="min-h-screen flex xl:flex-row flex-col justify-center items-center gap-20 px-[5%]"
      >
        <div>
          <img
            src={cench}
            alt="Profile"
            className="w-[400px] h-[400px] object-cover rounded-full xl:w-[400px] xl:h-[400px] md:w-[275px] md:h-[275px]"
          />
        </div>

        <div className="text-center">
          <p className="text-lg">Hello, I'm</p>

          <h1 className="text-6xl font-bold mt-2">Central Cee</h1>

          <p className="text-3xl mt-4 text-gray-600">a Student</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">
              Download CV
            </button>

            <button className="bg-black text-white rounded-full px-8 py-4 hover:bg-gray-800 transition-all duration-300">
              Contact Info
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <FaInstagram size={50} />
            <FaLinkedin size={50} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="min-h-screen px-[5%] py-20 animate-[appearRight_1s_linear]"
      >
        <p className="text-center text-lg">Get To Know More</p>

        <h1 className="text-center text-4xl md:text-5xl font-sans text-gray-900 tracking-tight font-normal">
          About Me
        </h1>

        <div className="flex xl:flex-row flex-col gap-20 items-center justify-center mt-20">
          <div className="max-w-3xl">
            <div className="">
              <RoleSlider image={BrownCench} title="Software Engineer" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        className="min-h-screen px-[5%] py-20 animate-[appearLeft_1s_linear]"
      >
        <Experience />
      </section>

      
      <section
        ref={projectsRef}
        className="min-h-screen px-[5%]  animate-[appearRight_1s_linear]"
      >
        <p className="text-center text-lg">Browse My Recent</p>

        <h1 className="text-center text-5xl font-bold mt-2">Projects</h1>

        <Projects />
      </section>

      <section
        ref={contactRef}
        className="min-h-screen px-[5%] flex flex-col justify-center items-center mb-20"
      >
        <p className="text-lg">Get in Touch</p>

        <h1 className="text-5xl font-bold mt-2 mb-20">Contact Me</h1>

      
        <NewsletterCard className="mt-12 w-full" />
        
      </section>

     
      {/* //Footer */}
      <Footer/>

   
    </div>
  );
}

export default Home;
