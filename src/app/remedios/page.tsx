import RemediosBoard from "@/components/RemediosBoard";
import SideNavBar from "@/components/SideNavBar";
import { Button } from "@nextui-org/react";
import { Pill, Plus, Smile } from "lucide-react";
import Link from "next/link";

export default function Remedios() {

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
                <h2 className="text-2xl font-light">Bem-Vindo</h2>
            </div>

            <div className="flex flex-row">
                <SideNavBar />
                <section className="flex flex-col px-7 rounded-[20px] w-5/6 p-2 m-4 shadow-md bg-[#ffffff]/50">
                    <RemediosBoard />
                    <div className="flex justify-end">
                        <Button className="m-2 p-3 rounded-[15px] bg-[#3bff76]">
                            <Plus color="white" />
                        </Button>
                    </div>
                </section>
            </div>

        </main>
    )
}