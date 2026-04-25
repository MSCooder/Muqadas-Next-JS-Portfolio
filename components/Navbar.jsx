// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// const navLinks = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Education', href: '#education' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Link Hover Animation (Left to Right Bar)
//   const linkVariants = {
//     initial: { width: 0 },
//     hover: { width: '100%' },
//   };

//   return (
//     <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[90%] max-w-7xl z-50">
//       {/* Main Navbar Container (Pill shape and Glassmorphism) */}
//       <div className="flex items-center justify-between p-3 px-8 glass-effect relative">
        
//         {/* Left Side: Logo */}
//         <Link href="#home" className="text-2xl font-bold neon-text">
//           &lt;Muqadas/&gt;
//         </Link>

//         {/* Right Side: Desktop Tabs */}
//         <div className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <motion.div
//               key={link.name}
//               className="relative group py-2"
//               whileHover="hover"
//             >
//               <Link
//                 href={link.href}
//                 className="text-white font-medium group-hover:text-hazel-green transition-colors duration-300"
//               >
//                 {link.name}
//               </Link>
//               {/* Bottom Bar Animation */}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-[2px] bg-hazel-green"
//                 variants={linkVariants}
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Right Side: Resume Button (Animated & Linked) */}
//         <a 
//           href="/resume.pdf" // Path to your PDF in public/ folder
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="hidden md:block"
//         >
//           <motion.button
//             className="px-6 py-2 bg-hazel-green text-black font-semibold rounded-full hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             Resume
//           </motion.button>
//         </a>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden flex flex-col gap-1.5 focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           <div className={`h-[2px] w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
//           <div className={`h-[2px] w-6 bg-white ${isOpen ? 'opacity-0' : ''}`} />
//           <div className={`h-[2px] w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//         </button>
//       </div>

//       {/* Full Screen Animated Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3, ease: 'easeOut' }}
//             className="absolute top-20 left-0 w-full glass-effect rounded-2xl flex flex-col p-8 gap-4 items-center md:hidden"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)} // Close menu on click
//                 className="text-lg text-white font-medium hover:text-hazel-green transition-colors w-full text-center py-2"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <a 
//               href="/resume.pdf"
//               target="_blank"
//               className="w-full"
//               onClick={() => setIsOpen(false)}
//             >
//               <button className="w-full px-6 py-2 bg-hazel-green text-black font-semibold rounded-full hover:shadow-neon">
//                 Resume
//               </button>
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Container Animation (Page Load par upar se niche ana)
  const navContainerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 20, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1, // Is se links line-wise zahir hon gay
        delayChildren: 0.3 
      }
    }
  };

  // 2. Individual Item Animation (Links pop up)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkBarVariants = {
    initial: { width: 0 },
    hover: { width: '100%' },
  };

  return (
    <motion.nav 
      initial="hidden" 
      animate="visible" 
      variants={navContainerVariants}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[90%] max-w-7xl z-50"
    >
      <div className="flex items-center justify-between p-3 px-8 glass-effect relative border border-white/10">
        
        {/* Left Side: Logo */}
        {/* <motion.div variants={itemVariants}> */}
          <Link href="#home" className="text-2xl font-bold neon-text font-jetbrains tracking-tighter">
            &lt;Muqadas/&gt;
          </Link>
        {/* </motion.div> */}

        {/* Right Side: Desktop Tabs */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={itemVariants} // Load animation for each link
              className="relative group py-2"
              whileHover="hover"
            >
              <Link
                href={link.href}
                className="text-white font-medium group-hover:text-hazel-green transition-colors duration-300"
              >
                {link.name}
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-hazel-green"
                variants={linkBarVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Resume Button */}
        {/* <motion.div variants={itemVariants}> */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block"
          >
            <motion.button
              className="px-6 py-2 bg-hazel-green text-black font-semibold rounded-full hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Resume
            </motion.button>
          </a>
        {/* </motion.div> */}

        {/* Hamburger Menu for Mobile */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <div className={`h-[2px] w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-[2px] w-6 bg-white ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`h-[2px] w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </motion.button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full glass-effect rounded-2xl flex flex-col p-8 gap-2 items-center md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white font-medium hover:text-hazel-green transition-colors w-full text-center py-2"
              >
                {link.name}
              </Link>
            ))}
            {/* MOBILE RESUME BUTTON (Now Visible) */}
            <div className="w-full h-[1px] bg-white/10 my-2" /> {/* Divider line */}
            <a href="/resume.pdf" target="_blank" className="w-full">
              <button className="w-full px-6 py-3 bg-hazel-green text-black font-bold rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                Resume
              </button>
            </a>
          </motion.div>
        )}

        
      </AnimatePresence>
    </motion.nav>
  );
}