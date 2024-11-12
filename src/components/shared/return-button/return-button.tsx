'use client';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation";

export default function ReturnButton({ className }: { className?: string }) {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()} className={cn("flex flex-row gap-1 max-w-[150px]", className)}><LucideChevronLeft className="h-4 w-4 " />Voltar</Button>
    )
}