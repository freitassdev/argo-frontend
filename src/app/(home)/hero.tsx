import GradientTitle from "@/components/shared/gradient-title/gradient-title"
import Image from "next/image"
import glasses from "@/assets/images/glasses.webp"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { motion } from "framer-motion"
export default function HomeHero() {
    return (
        <div className="h-[100dvh] w-full overflow-x-hidden flex flex-col items-center justify-center">
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.3,
                        damping: 0,
                        duration: 0.5
                    }
                }}
                className="flex flex-col items-center justify-center w-full text-center">
                <HoverBorderGradient>
                    Veja nossas melhores promoções atuais!
                </HoverBorderGradient>
                <GradientTitle className="text-6xl">
                    Encontre Óculos Perfeito
                </GradientTitle>
                <p className="max-w-[50%] max-sm:max-w-[90%] text-lg ">Transforme seu visual com óculos que combinam estilo, conforto e proteção para todas as ocasiões.</p>
                <Image src={glasses} className="w-[35%] max-sm:w-[60%] mt-7" alt="óculos demonstrativo" />
            </motion.div>
            <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
    )
}