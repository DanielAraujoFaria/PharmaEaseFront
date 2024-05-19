import Sobre from "@/components/Sobre";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Image from "next/image"; 7
import background from '../../public/palm.jpg'
import { Pill } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-cover bg-[url('../../public/homeblur.jpg')]">
      <div className="mt-32 mb-10 text-center">
        <h1 className="text-4xl font-bold inline-flex items-center">
          Pharma
          <span className="mx-1"><Pill strokeWidth={3} absoluteStrokeWidth /></span>
          Ease
        </h1>
        <h2 className="text-2xl font-light">Facilitando o acesso a Medicamentos</h2>
      </div>
      <Sobre />
      <Link href="/remedios">
        <Button className="m-2 px-12 py-6 rounded-[20px] font-bold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-green-500 hover:to-emerald-500">
          Entrar</Button>
      </Link>
    </main>
  )
}
