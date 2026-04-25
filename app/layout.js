import "./globals.css";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

// Font configuration
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta", // CSS variable create karein
});

export const metadata = {
  title: "Muqadas | Full Stack Web Engineer",
  description: "Portfolio of a Full Stack Web Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${jetbrains.variable} font-sans bg-aisa-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}