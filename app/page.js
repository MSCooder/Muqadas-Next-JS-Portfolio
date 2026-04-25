'use client';
// page.js ko aise update karke dekhein
import Navbar from "components/Navbar"; // Agar components folder app folder ke bahar hai
import Hero from "components/Hero";

export default function Home() {
  return (
    <main className="bg-aisa-black min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}