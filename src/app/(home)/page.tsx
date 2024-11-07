'use client';

import Item from "@/components/shared/item/item";
import HomeHero from "./hero";
import Navbar from "@/components/shared/navbar/navbar";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-md text-foreground">Seja bem vindo(a)!</p>
            <p className="text-lg text-foreground">Veja as principais promoções da semana, estão imperdíveis!</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 20 }).map((_, index) => (
              <Item key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}