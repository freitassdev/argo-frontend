import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle/theme-toggle";
export default function Navbar() {
    return (
        <div className="px-10 gap-4 w-full flex flex-row justify-between items-center h-20 absolute bg-background/40 backdrop-blur-md shadow-md">
            <div className="flex flex-row items-center w-full">
                logo
            </div>
            <div className="relative w-full">
                <Input placeholder="Pesquisar produto..." className="max-w-[500px]" />
                <Search className="text-muted-foreground absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2" />
            </div>
            <div className="flex flex-row items-center gap-3 w-full justify-end">
                <Button className="bg-primary">Fazer Login</Button>
                <Button variant="outline">Criar conta</Button>
                <ThemeToggle />
            </div>
        </div>
    )
}