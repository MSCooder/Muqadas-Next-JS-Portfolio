// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

// import profileImg from 'public/MainImage1.jpg'; // Make sure this path is correct

// // 1. Roles Data for Typing Effect
// const roles = [
//   "Full Stack Web Engineer",
//   "Frontend Developer",
//   "Problem Solver"
// ];

// // 2. Tech Icons Data for Orbit Animation
// const techIcons = [
//   { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//   { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
//   { name: 'JS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'Jquery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
//   { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
//   { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
//   { name: 'NextJs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
//   { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
//   { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
//   { name: 'Rest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }, // Using github as placeholder for API
// ];

// export default function Hero() {
//   const [init, setInit] = useState(false);
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   // --- A. Particles Background Initialization ---
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   // --- B. Typing Effect Logic ---
//   useEffect(() => {
//     const handleType = () => {
//       const fullText = roles[currentRoleIndex];
//       const typingSpeed = isDeleting ? 50 : 100;

//       setCurrentText(prev => 
//         isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
//       );

//       if (!isDeleting && currentText === fullText) {
//         setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
//       } else if (isDeleting && currentText === '') {
//         setIsDeleting(false);
//         setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//       }
//     };

//     const timer = setTimeout(handleType, 100);
//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentRoleIndex]);


//   // --- C. Particles Configuration (Matching image 6) ---
//   const particlesOptions = {
//     background: { color: { value: "transparent" } },
//     fpsLimit: 120,
//     interactivity: {
//       events: { onHover: { enable: true, mode: "grab" }, resize: true },
//       modes: { grab: { distance: 150, line_linked: { opacity: 0.3 } } },
//     },
//     particles: {
//       color: { value: "#22c55e" }, // Hazel Green particles
//       links: {
//         color: "#22c55e",
//         distance: 150,
//         enable: true,
//         opacity: 0.2,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 0.6, // Slow, continuous movement
//         direction: "none",
//         random: false,
//         straight: false,
//         outModes: { default: "out" },
//       },
//       number: { density: { enable: true, area: 800 }, value: 80 },
//       opacity: { value: 0.3 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 2 } },
//     },
//     detectRetina: true,
//   };

//   return (
//     <section id="home" className="relative w-full min-h-screen bg-aisa-black flex items-center justify-center overflow-hidden font-sans">
      
//       {/* 1. MOVING PARTICLES BACKGROUND (Image 6 style) */}
//       {init && (
//         <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0" />
//       )}

//       {/* 2. MAIN CONTENT GRID (Image 4 style) */}
//       <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl pt-24 pb-16">
        
//         {/* LEFT SIDE: Text & Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col gap-6 text-left"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
//             Hi, I'm <span className="neon-text font-jetbrains">Muqadas</span>
//           </h1>

//           {/* Typing Effect for Typography Roles */}
//           <div className="h-10 text-xl md:text-2xl font-semibold text-gray-300">
//             A <span className="text-hazel-green">{currentText}</span>
//             <span className="animate-pulse text-hazel-green">|</span>
//           </div>

//           <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
//             I'm a Computer Science undergraduate and aspiring <span className='text-white'>Frontend Developer</span> and <span className='text-white'>Full Stack Web Engineer</span>. 
//             I transform theoretical knowledge into responsive, high-performance digital experiences. 
//             I am always eager to explore new opportunities.
//           </p>

//           {/* SOCIAL MEDIA ICONS (Image 5 style) */}
//           <div className="flex gap-4 items-center mt-4">
//             {[FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp].map((Icon, index) => (
//               <motion.a
//                 key={index}
//                 href="#"
//                 className="w-12 h-12 flex items-center justify-center rounded-full border border-hazel-green/30 text-hazel-green text-xl hover:bg-hazel-green/10 transition-all duration-300"
//                 whileHover={{ scale: 1.15, borderColor: '#22c55e', boxShadow: '0 0 15px rgba(34,197,94,0.4)' }}
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }} // Floating animation
//               >
//                 <Icon />
//               </motion.a>
//             ))}
//           </div>

//           {/* BUTTONS (Image 5 style) */}
//           <div className="flex flex-wrap gap-4 mt-8">
//             <motion.button 
//               className="flex items-center gap-2 px-8 py-3 bg-hazel-green text-black font-bold rounded-xl transition-all shadow-[0_0_10px_rgba(34,197,94,0.3)]"
//               whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34,197,94,0.6)' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View My Work <FaArrowRight />
//             </motion.button>
//             <motion.button 
//               className="px-8 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
//               whileHover={{ scale: 1.02 }}
//             >
//               Hire Me
//             </motion.button>
//           </div>
//         </motion.div>


//         {/* RIGHT SIDE: ORBITING ICONS & PROFILE (Image 4 logic) */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative flex justify-center items-center h-[500px] md:h-[600px]"
//         >
//           {/* Circular Orbit Path (Static) */}
//           <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full z-0" />

//           {/* Central Profile Image with Neon Glow */}
//           <div className="relative w-72 h-72 md:w-96 md:w-96 rounded-full p-2 border-2 border-hazel-green/20 shadow-[0_0_60px_rgba(34,197,94,0.3)] z-10 bg-aisa-black/80">
//             <Image 
//               src={profileImg} 
//               alt="Muqadas - Web Engineer" 
//               className="rounded-full object-cover"
//               fill
//               priority
//             />
//           </div>

//           {/* Orbiting Tech Icons */}
//           {techIcons.map((icon, index) => {
//             const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 175 : 225; // Smaller radius on mobile
//             const angle = (index / techIcons.length) * 360; // Initial angle

//             return (
//               <motion.div
//                 key={icon.name}
//                 className="absolute w-12 h-12 p-2.5 rounded-full bg-aisa-black border border-hazel-green/30 shadow-lg z-20"
//                 style={{
//                   '--radius': `${radius}px`,
//                   '--start-angle': `${angle}deg`,
//                 }}
//                 animate={{
//                   // Orbiting around center logic
//                   rotate: [angle + 'deg', (angle + 360) + 'deg']
//                 }}
//                 transition={{
//                   duration: 20, // Speed of orbit
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               >
//                 {/* Prevent icon itself from rotating */}
//                 <motion.div
//                    animate={{ rotate: [(angle*-1)+'deg', ((angle+360)*-1)+'deg'] }}
//                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                    className="w-full h-full relative"
//                 >
//                     <Image src={icon.src} alt={icon.name} fill className="object-contain" />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//     </section>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

import profileImg from 'public/MainImage1.jpg'; 

const roles = ["Full Stack Web Engineer", "Frontend Developer", "Web Developer", "Problem Solver"];

const techIcons = [
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'NextJs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Github', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
];

export default function Hero() {
  const [init, setInit] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative w-80% min-h-screen bg-aisa-black flex items-center justify-center pt-20">
      
      {/* 1. Interactive Background */}
      {init && (
        <Particles 
          options={{
            fpsLimit: 120,
            interactivity: { events: { onHover: { enable: true, mode: "parallax" } }, modes: { parallax: { enable: true, force: 60, smooth: 10 } } },
            particles: {
              color: { value: "#22c55e" },
              links: { color: "#22c55e", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 0.8 },
              number: { value: 100 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 2 } },
            },
          }} 
          className="absolute inset-0 z-0" 
        />
      )}

      {/* 2. Main 80% Container */}
      <div className="w-[80%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10 py-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            Hi, I'm<span className="neon-text font-jetbrains text-hazel-green"> Muqadas</span>
          </h1>

          <div className="h-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-3xl font-semibold text-gray-300"
              >
                A <span className="text-hazel-green">{roles[currentRoleIndex]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I'm a Computer Science undergraduate. I'm aspiring 
            <span className="text-white"> Frontend
Developer</span> and 
            <span className="text-white"> Full Stack Web Engineer </span>
           building high-performance 
            web experiences and 
           scalable systems. 
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-2">
            {[FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-hazel-green/30 text-hazel-green hover:bg-hazel-green hover:text-black transition-all duration-300">
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="px-10 py-4 bg-hazel-green text-black font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
              My Work <FaArrowRight />
            </button>
            
            {/* Hire Me - Outline to Neon Effect */}
            <button className="px-10 py-4 border-2 border-hazel-green/50 text-white font-bold rounded-xl hover:bg-hazel-green hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: PROFILE & ORBIT */}
        <div className="relative flex justify-center items-center h-[600px]">
          
          {/* Main Profile Image */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-72 h-72 md:w-[400px] md:h-[400px] z-20 rounded-full p-1 bg-gradient-to-b from-hazel-green to-transparent shadow-[0_0_60px_rgba(34,197,94,0.2)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-aisa-black">
              <Image 
                src={profileImg} 
                alt="Muqadas" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
          </motion.div>

          {/* Orbiting Icons Logic */}
          <div className="absolute w-full h-full flex justify-center items-center z-30">
            {techIcons.map((icon, index) => {
              const total = techIcons.length;
              const duration = 25; // Speed
              const delay = (index / total) * duration;

              return (
                <motion.div
                  key={icon.name}
                  className="absolute pointer-events-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '520px', // Ring size
                    height: '520px',
                    transform: `rotate(${(index / total) * 360}deg)`
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 p-3 bg-aisa-black/90 border border-hazel-green/40 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
                    animate={{ rotate: -360 }} // Keeps icons upright
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                  >
                    <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative Outer Rings */}
          <div className="absolute w-[520px] h-[520px] border border-white/5 rounded-full z-0" />
          <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full z-0 opacity-50" />
        </div>

      </div>
    </section>
  );
}