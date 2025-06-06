import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GridItemProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  href: string;
  hasArrow?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  href, 
  hasArrow = false 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block h-full w-full overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
      
      {/* Content - Positioned at bottom */}
      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        {subtitle && (
          <p className="text-white/90 text-sm font-medium tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {subtitle}
          </p>
        )}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
          {title}
          {hasArrow && (
            <ArrowRight className="inline-block ml-3 w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-2 transition-transform duration-300" />
          )}
        </h2>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300" />
    </a>
  );
};

function App() {
  const gridItems: GridItemProps[] = [
    {
      title: "My Music Journey",
      backgroundImage: "https://images.pexels.com/photos/1647126/pexels-photo-1647126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      href: "#music",
      subtitle: "From producing tracks to performing as an artist and DJ, music is my passion."
    },
    {
      title: "Trading & Investing",
      backgroundImage: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=1200",
      href: "#finance",
      subtitle: "I share my experience navigating financial markets, investing, and real estate."
    },
    {
      title: "Digital Products I Create",
      backgroundImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
      href: "#digital",
      subtitle: "Check out my e-books, courses, and tools—things that have helped me and can help you."
    },
    {
      title: "Connect with Me Online",
      backgroundImage: "https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=1200",
      href: "/social",
      subtitle: "All my socials in one place—click to connect!",
      hasArrow: true
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* About Me Section */}
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-fuchsia-600 via-blue-700 via-60% to-indigo-900 relative overflow-hidden animate-fade-in">
        {/* Blurred background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse" />
        <img src="/src/images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 shadow-lg object-cover z-10 border-4 border-white/20" />
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center z-10">Hey, I’m Moses Stone</h1>
        <p className="text-white/80 max-w-2xl text-center mb-2 z-10">
          Artist, producer, DJ. I trade, invest, and create digital products. Welcome to my world.
        </p>
      </section>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {gridItems.map((item, index) => (
          <div key={index} className="h-screen md:h-auto">
            <GridItem {...item} />
          </div>
        ))}
      </div>

      {/* Footer Text - Only visible on desktop */}
      <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-white/60 text-xs tracking-wider uppercase">
          FULFILLMENT POLICY / REFUND POLICY
        </p>
      </div>
    </div>
  );
}

export default App;