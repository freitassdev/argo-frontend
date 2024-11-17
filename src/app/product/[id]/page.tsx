import Navbar from "@/components/shared/navbar/navbar";
import MasterProductPage from "./master.page";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    return (
        <div className="w-full h-full">
            <Navbar />
            <MasterProductPage id={id}/>
        </div>
    )
}