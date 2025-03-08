"use client";

import Image from "next/image";
import HeroSection from "@/components/hero";
import { features } from "@/components/data/features.js";
import { Building2, BookOpen, Trophy, Bot } from 'lucide-react';
import { howItWorks } from "@/components/data/howitWorks.js";
import { testimonial } from "@/components/data/testimonials.js";
import { faqs } from "@/components/data/faqs.js";
import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title leading-tight">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Empowering careers with proven results and comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Industries Covered */}
            <div className="relative p-6 rounded-xl 
                          bg-gradient-to-tr from-blue-500/10 to-purple-500/10
                          backdrop-blur-sm border-t border-l border-white/5
                          group text-center hover:bg-blue-500/5 transition-all duration-300">
              <div className="relative z-10 flex flex-col items-center">
                <Building2 className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                              bg-clip-text text-transparent mb-2">50+</h3>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                  Industries Covered
                </p>
              </div>
            </div>

            {/* Interview Questions */}
            <div className="relative p-6 rounded-xl 
                          bg-gradient-to-tr from-green-500/10 to-emerald-500/10
                          backdrop-blur-sm border-t border-l border-white/5
                          group text-center hover:bg-green-500/5 transition-all duration-300">
              <div className="relative z-10 flex flex-col items-center">
                <BookOpen className="w-12 h-12 mb-4 text-green-400" />
                <h3 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 
                              bg-clip-text text-transparent mb-2">1000+</h3>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                  Interview Questions
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="relative p-6 rounded-xl 
                          bg-gradient-to-tr from-purple-500/10 to-pink-500/10
                          backdrop-blur-sm border-t border-l border-white/5
                          group text-center hover:bg-purple-500/5 transition-all duration-300">
              <div className="relative z-10 flex flex-col items-center">
                <Trophy className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
                              bg-clip-text text-transparent mb-2">95%</h3>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                  Success Rate
                </p>
              </div>
            </div>

            {/* AI Support */}
            <div className="relative p-6 rounded-xl 
                          bg-gradient-to-tr from-orange-500/10 to-red-500/10
                          backdrop-blur-sm border-t border-l border-white/5
                          group text-center hover:bg-orange-500/5 transition-all duration-300">
              <div className="relative z-10 flex flex-col items-center">
                <Bot className="w-12 h-12 mb-4 text-orange-400" />
                <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 
                              bg-clip-text text-transparent mb-2">24/7</h3>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                  AI Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title leading-tight">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Your journey to career success in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl 
                          bg-gradient-to-b from-gray-800/30 to-gray-900/30
                          border border-gray-800/50 backdrop-blur-sm
                          group text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2
                              w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                              flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 p-3 rounded-full bg-gray-800/50 group-hover:bg-gray-800/70 
                                transition-colors duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 
                                group-hover:text-transparent group-hover:bg-clip-text
                                group-hover:bg-gradient-to-r group-hover:from-blue-400 to-purple-400">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Connection line with arrow */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-16 
                                transform -translate-y-1/2">
                    <div className="relative h-[2px] w-full bg-gradient-to-r 
                                  from-blue-500/40 via-purple-500/40 to-blue-500/40">
                      {/* Arrow head */}
                      <div className="absolute right-0 -top-[4px] w-0 h-0 
                                    border-t-[5px] border-t-transparent
                                    border-l-[8px] border-l-purple-500/40
                                    border-b-[5px] border-b-transparent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title leading-tight">
              Success Stories
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Hear from professionals who transformed their careers with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonial.map((item, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl min-h-[320px]
                          bg-gradient-to-b from-gray-800/30 to-gray-900/30
                          border border-gray-800/50 backdrop-blur-sm
                          group hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full 
                              bg-gradient-to-r from-blue-500 to-purple-500 
                              flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="h-full flex flex-col">
                  <p className="text-gray-300 leading-relaxed italic flex-grow">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center space-x-4 mt-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.author}</h4>
                      <p className="text-sm text-gray-400">
                        {item.role} • {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-title leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Get answers to common questions about our platform
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative rounded-xl 
                          bg-gradient-to-b from-gray-800/30 to-gray-900/30
                          border border-gray-800/50 backdrop-blur-sm
                          group hover:border-blue-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-start space-x-4"
                  aria-expanded={openFaq === index}
                >
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full 
                                bg-gradient-to-r from-blue-500 to-purple-500 
                                flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white pr-8">
                        {faq.question}
                      </h3>
                      {/* Chevron icon */}
                      <svg
                        className={`w-6 h-6 text-blue-400 transform transition-transform duration-300
                                ${openFaq === index ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    
                    {/* Answer */}
                    <div
                      className={`mt-4 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300
                                ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </button>

                {/* Decorative gradient */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 
                              bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                              blur-2xl rounded-full opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-3xl font-bold mb-4 tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">Ready to Take Your Career to the Next Level?</h4>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Discover how thousands of professionals have elevated their careers to new heights with our innovative platform
            </p>
            <Link href="/dashboard" passHref>
             <Button 
              size="lg"
              variant="secondary"
              className = "h-11 mt-5 animate-bounce"
             >
              Start Your Journey Now <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}