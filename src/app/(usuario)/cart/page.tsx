'use client';

import CartItem from "@/components/shared/cart-item/cart-item";
import CartResume from "@/components/shared/cart-resume/cart-resume";
import GradientTitle from "@/components/shared/gradient-title/gradient-title";
import Navbar from "@/components/shared/navbar/navbar";
export default function Cart() {
    return (
        <div className="mt-24">
            <Navbar />
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col w-full">
                        <GradientTitle>Meu carrinho</GradientTitle>
                        <div className="flex flex-row gap-3 w-full justify-between max-md:flex-col max-md:justify-start">
                            <div className="flex flex-col w-full gap-3">
                                <CartItem />
                                
                            </div>
                            <div className="flex flex-col max-w-[30%] max-md:max-w-full w-full h-full">
                                <CartResume />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}