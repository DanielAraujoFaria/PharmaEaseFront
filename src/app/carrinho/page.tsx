import PedidosBoard from "@/components/PedidosBoard";
import SideNavBar from "@/components/SideNavBar";
import { Button } from "@nextui-org/react";
import { CreditCard, Pill, Plus } from "lucide-react";
import Link from "next/link";

export default function Carrinho() {

    return (
        <main className="flex min-h-screen flex-col gap-4 bg-cover bg-[url('../../public/farmacia.jpg')]">
            <div className="mt-10 ml-10 place-self-starts">
                <Link href="/">
                    <h1 className="text-4xl font-bold inline-flex items-center">
                        Pharma
                        <span className="mx-1"><Pill strokeWidth={3} absoluteStrokeWidth /></span>
                        Ease
                    </h1>
                </Link>
            </div>

            <div className="flex flex-row">
                <SideNavBar />
                <section className="flex flex-col px-7 rounded-[20px] w-5/6 p-2 m-4 shadow-md bg-[#ffffff]/50">
                    <h1 className="mt-5 text-2xl font-bold">Pedidos</h1>
                    <PedidosBoard />
                    <div className="flex gap-40 space-x-96 justify-start">
                        <section className="flex items-center gap-3 mt-5 py-3 px-8 rounded-[15px] w-80 bg-gradient-to-r from-amber-500 to-amber-300">
                            <p className="justify-start font-bold text-[#5c432b]">TOTAL :</p>
                        </section>
                        <Button className="m-5 px-20 py-3 rounded-[15px] shadow-lg shadow-amber-300 bg-[#ffc13b] hover:bg-teal-500 hover:shadow-cyan-300">
                            <CreditCard color="white" />
                        </Button>
                    </div>
                </section>
            </div>


        </main>
    )
}