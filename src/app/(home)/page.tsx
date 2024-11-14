'use client';

import HomeHero from "./hero";
import BannersSection from "./banners";
import Navbar from "@/components/shared/navbar/navbar";
import Item from "@/components/shared/item/item";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <div className="my-4">
        <BannersSection />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-md text-foreground">Seja bem vindo(a)!</p>
            <p className="text-lg text-foreground">Veja as principais promoções da semana, estão imperdíveis!</p>
          </div>
          <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-3 overflow-x-hidden">
            {Array.from({ length: 20 }).map((_, index) => (
              <Item key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}