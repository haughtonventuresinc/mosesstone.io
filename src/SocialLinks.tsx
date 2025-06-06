

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/IAmMosesStone",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@MosesStoneTV",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mosesstone/",
  },
];

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  Facebook: <FaFacebookF className="text-blue-500 text-2xl" />,
  YouTube: <FaYoutube className="text-red-500 text-2xl" />,
  Instagram: <FaInstagram className="text-pink-400 text-2xl" />,
};

export default function SocialLinks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-600 via-blue-700 via-60% to-indigo-900 relative overflow-hidden animate-fade-in">
      {/* Blurred background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse" />
      {/* Profile image */}
      <img src="/src/images/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-4 shadow-lg object-cover z-10 border-4 border-white/20" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center tracking-tight z-10 drop-shadow-lg">Connect with Me Online</h1>
      <p className="text-white/70 text-center max-w-md mb-8 z-10">Follow me on my socials and stay up to date with music, trading, and more.</p>
      <div className="flex flex-col gap-6 w-full max-w-xs z-10">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full py-4 px-6 rounded-xl bg-white/10 text-white text-xl font-semibold shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-200 backdrop-blur-md border border-white/10"
          >
            <span>{iconMap[link.name]}</span>
            <span className="flex-1 text-left">{link.name}</span>
            <svg className="w-5 h-5 ml-auto text-white/60 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        ))}
      </div>
    </div>
  );
}

// Fade-in animation
// Add this to your global CSS (e.g. index.css):
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
