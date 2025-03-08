import Image from "next/image";
import HeroSection from "@/components/hero";
import {features} from "@/components/data/features.js";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title leading-tight">
              Unlock Your Full Potential
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Cutting-edge tools powered by AI to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 
                          bg-gradient-to-b from-gray-800/50 to-gray-900/50
                          border border-gray-800/50 backdrop-blur-sm
                          transform transition-all duration-500 ease-out
                          hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10
                          group text-center"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon without box */}
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 
                                group-hover:text-transparent group-hover:bg-clip-text
                                group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400
                                transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 
                              leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 
                              bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                              blur-2xl rounded-full opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}