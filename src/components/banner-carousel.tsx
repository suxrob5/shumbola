"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Baner1 from "@/assets/images/baner.png";
import Baner2 from "@/assets/images/video-baner.png";

const slides = [
    {
        id: 1,
        image: Baner1,
        title: "Shumbola — с 2023 года",
        subtitle: "ваши любимые снеки",
    },
    {
        id: 2,
        image: Baner2,
        title: "Качество и вкус",
        subtitle: "выбирайте лучшее",
    },
];

const BannerCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="relative w-full h-full shrink-0"
                    >
                        <Image
                            src={slide.image}
                            alt={`slide-${slide.id}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-16 md:pb-24">
                            <h1
                                className="text-center text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-4 drop-shadow-2xl"
                                data-aos="fade-up"
                            >
                                {slide.title} <br className="hidden sm:block" /> {slide.subtitle}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;
