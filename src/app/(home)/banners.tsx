'use client';
import banners from "@/assets/images/banner"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react"
import Image from "next/image";

export default function BannersSection() {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )
    return (
        <div className="flex flex-col gap-2 w-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-sm:max-w-full max-w-[80%] mx-auto"
                
            >
                <CarouselContent className="w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Image priority src={banners[index]} alt={`banner-${index}`} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}