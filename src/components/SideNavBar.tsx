import { Button } from "@nextui-org/react";
import { Pill, ShoppingCart, Tablets } from "lucide-react";
import Link from "next/link";

export default function SideNavBar() {

    return (
        <nav className="m-10 flex flex-col rounded-[20px] items-center px-4 py-2 shadow-md bg-[#ffffff]/50 w-[10rem] h-96" >
            <ul>
                <li className="flex flex-col gap-60 space-y-4 pt-10">
                    <Link href="/remedios" className="font-bold w-full flex items-center hover:text-cyan-500">
                    <Tablets strokeWidth={2} absoluteStrokeWidth className="mr-2"/>Remédios
                    </Link>
                    <Link href="/carrinho">
                        <Button className="p-8 ml-3 rounded-[20px] shadow-lg shadow-green-500 bg-[#3bff76]"><ShoppingCart color="white" /></Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}