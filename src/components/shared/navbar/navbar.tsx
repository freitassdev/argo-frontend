import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ThemeToggle from "@/components/shared/theme-toggle/theme-toggle";
import logo from "@/assets/images/black-logo.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 md:mx-auto flex h-[60px] items-center justify-between rounded-lg border px-2 saturate-100 transition-all duration-200 max-sm:mx-3 sm:mx-3 md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1300px] shadow-lg bg-background/50 backdrop-blur-md ">
      <div className="flex flex-row items-center">
        <Image alt="logo" priority src={logo} className="h-[40px] w-auto dark:invert"/>
      </div>
      <div className="flex flex-row items-center gap-3 w-fit justify-end">
        <div className="relative w-full">
          <Input placeholder="Pesquisar produto..." className="w-full" />
          <Search className="text-muted-foreground absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2" />
        </div>
        <ThemeToggle className="w-[200px]" />
        <Button variant="outline">Criar conta</Button>
        <Button className="bg-primary">Fazer Login</Button>
      </div>
    </div>
  );
}
