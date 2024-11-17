'use client';

import HomeHero from "./hero";
import BannersSection from "./banners";
import Navbar from "@/components/shared/navbar/navbar";
import Item from "@/components/shared/item/item";
import { useEffect, useState } from "react";
import axios from "@/services/axios.service";
import { Separator } from "@/components/ui/separator";

interface IHomeProducts {
  desconto: {
    ID: number;
    NOME: string;
    VALOR: string;
    DESCONTO: string;
    IMGPATH: string;
  }[];
  produtos: {
    ID: number;
    NOME: string;
    IMGPATH: string;
    VALOR: string;
  }[];
}

export default function Home() {
  const [products, setProducts] = useState<IHomeProducts | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.post('consulta/consulta.php', {
        tipo: "home"
      })
      setProducts(data);
    }
    fetchProducts();
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <div className="my-4">
        <BannersSection />
      </div>
      <Separator />
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-md text-foreground">Seja bem vindo(a)!</p>
            <p className="text-lg text-foreground">Veja as principais promoções da semana, estão imperdíveis!</p>
          </div>
          <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-3 overflow-x-hidden">
            {products && products.desconto.slice(0, 10).map((item, index) => (
              <Item
                id={item.ID}
                imagePath={item.IMGPATH}
                title={item.NOME}
                price={item.VALOR || '-----'}
                pricePromo={item.DESCONTO || item.VALOR || '----'}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}