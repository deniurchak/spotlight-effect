"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const models = [
    {
      name: "Kling AI",
      image: "/images/kling-ai-logo.jpg",
      price: "$0.53 per 5s",
      tags: ["Professional Mode", "Experimental API"],
      stats: { accuracy: "High", speed: "Medium" },
    },
    {
      name: "Runway Gen3",
      image: "/images/runway-logo.jpg",
      price: "$0.61 per 5s",
      tags: ["Professional", "Monthly Subscription"],
      stats: { accuracy: "Very high", speed: "High" },
    },
    {
      name: "Stable Video Diffusion",
      image: "/images/stable-diffusion-logo.jpeg",
      price: "$0.5 per 5s",
      tags: ["High Quality", "Versatile"],
      stats: { accuracy: "High", speed: "Medium" },
    },

    {
      name: "Luma",
      image: "/images/luma-logo.jpeg",
      price: "$0.20 per 5s",
      tags: ["Budget", "User-friendly"],
      stats: { accuracy: "High", speed: "Low" },
    },
    {
      name: "Hailuo",
      image: "/images/hailuo-logo.webp",
      price: "$0.03 per 5s",
      tags: ["Innovative", "Monthly Subscription"],
      stats: { accuracy: "High", speed: "High" },
    },
    {
      name: "Pika Labs",
      image: "/images/pika-logo.jpg",
      price: "$0.21 per 5s",
      tags: ["Advanced", "Scalable"],
      stats: { accuracy: "High", speed: "Medium" },
    },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleMouseMove = (
    event: React.MouseEvent,
    cardRef: React.RefObject<HTMLDivElement>,
    index: number
  ) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      console.log(rect);
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
      setActiveCardIndex(index);
    }
  };
  console.log(mousePosition);

  const handleMouseLeave = () => {
    setActiveCardIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 text-white font-[family-name:var(--font-geist-sans)]">
      <header className="p-6 backdrop-blur-md bg-black/30 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Video AI Hub
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Choose a Video Generation Model
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg max-w-2xl mx-auto">
          Explore cutting-edge AI models to bring your video ideas to life in
          ways you've never imagined
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map((model, index) => {
            const cardRef = useRef(null);
            return (
              <div
                key={index}
                ref={cardRef}
                className="
                bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-default flex flex-col shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative"
                onMouseMove={(e) => handleMouseMove(e, cardRef, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  background:
                    activeCardIndex === index
                      ? `radial-gradient(
                            circle at ${mousePosition.x}px ${mousePosition.y}px, 
                            rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%
                          )`
                      : "none",
                }}
              >
                <div className="relative">
                  <Image
                    src={model.image}
                    alt={`${model.name} logo`}
                    width={100}
                    height={100}
                    className="transition-all duration-300 hover:scale-110"
                    quality={100}
                    priority
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">{model.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Unleash your creativity and generate stunning videos with{" "}
                    {model.name}
                  </p>
                  <p className="text-xl font-bold text-pink-400 mb-4">
                    {model.price}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-blue-600 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-6">
                    Stats: Accuracy - {model.stats.accuracy}, Speed -{" "}
                    {model.stats.speed}
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Start Creating
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="mt-auto py-10 px-6 backdrop-blur-md bg-black/30 text-center text-gray-300">
        <p>&copy; 2023 Video AI Hub. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="#"
            className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition-colors duration-300 ease-in-out"
          >
            FAQ
          </a>
        </div>
      </footer>
    </div>
  );
}
