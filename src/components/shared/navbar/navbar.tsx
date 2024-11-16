'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ThemeToggle from "@/components/shared/theme-toggle/theme-toggle";
import logo from "@/assets/images/black-logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>

      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            damping: 0
          }
        }}
        className="fixed inset-x-0 top-4 z-50 md:mx-auto flex h-[60px] items-center justify-between rounded-lg border px-2 saturate-100 transition-all duration-200 max-sm:mx-3 sm:mx-3 md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1300px] shadow-lg bg-background/50 backdrop-blur-md ">
        <div className="flex flex-row items-center">
          <Image alt="logo" priority src={logo} className="h-[40px] w-auto dark:invert" />
        </div>
        <div className="flex flex-row items-center max-lg:gap-1 gap-3 w-fit justify-end">
          <div className="relative w-full max-lg:hidden">
            <Input className="bg-background w-full" placeholder="Pesquisar produto..." />
            <Search className="text-muted-foreground absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2" />
          </div>
          <ThemeToggle className="max-lg:w-[100px] w-[200px] bg-background hover:bg-card/60" />
          <Link href="/cadastro">
            <Button className="max-lg:hidden" variant="outline">Criar conta</Button>
          </Link>
          <Link href="/login">
            <Button className="max-lg:hidden bg-primary">Fazer Login</Button>
          </Link>
          <Button variant="ghost" className="hidden max-lg:flex w-9 auto hover:bg-transparent hover:border hover:border-border" onClick={() => setOpen(!open)}>
            <Menu />
          </Button>
        </div>
      </motion.div>
      <Sheet defaultOpen={false} open={open} onOpenChange={(opened) => setOpen(opened)}>
        <SheetContent className="lg:hidden flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <SheetHeader className="flex flex-row gap-3 items-center">
              <SheetTitle>
                <Image alt="logo" priority src={logo} className="h-[40px] w-auto dark:invert" />
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="relative w-full lg:hidden">
              <Input className="bg-background w-full" placeholder="Pesquisar produto..." />
              <Search className="text-muted-foreground absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2" />
            </div>
            <div className="flex flex-col gap-3 ">
            </div>
          </div>
          <SheetFooter className="flex flex-col gap-2">
            <Link href="/cadastro">
              <Button className="w-full" variant="outline">Criar conta</Button>
            </Link>
            <Link href="/login">
              <Button className="w-full bg-primary">Fazer Login</Button>
            </Link>

          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
