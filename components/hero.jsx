'use client'
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import heroImage from '@/public/banner.png'

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const scrollPosition = window.scrollY;
                const scrollThreshold = 100;

                if (scrollPosition > scrollThreshold) {
                    imageRef.current.classList.add("scrolled");
                } else {
                    imageRef.current.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-16">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
                <div className="space-y-6 mx-auto">
                    <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl gradient-title leading-tight">
                        Elevate Your Career with
                        <br />
                        <span className="text-gray-300">AI-Powered Guidance</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400">
                        Transform your professional journey with personalized mentoring, expert interview coaching, and strategic career planning - all powered by advanced AI technology.
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-white transition">
                            Start Your Journey
                        </Button>
                    </Link>
                </div>

                <div className="hero-image-wrapper mt-5 md:mt-0 flex justify-center">
                    <div ref={imageRef} className="hero-image">
                        <Image 
                            src={heroImage}
                            alt="Hero Image"
                            width={1280}  // Adjusted width for better proportion
                            height={720}  // Adjusted height for better proportion
                            priority
                            className="rounded-lg shadow-2xl border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
