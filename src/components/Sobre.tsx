import { Input } from "@nextui-org/react";

export default function Sobre() {

    return (
        <main>
          <div className="flex flex-col items-center justify-center max-w-6xl h-auto px-10 py-10 rounded-[20px] shadow-md bg-[#ffffff]/50">
            <p className="text-zinc-600 text-center font-semibold mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit aliquam saepe necessitatibus ipsa corrupti nostrum, inventore expedita esse illum ex culpa dignissimos excepturi iure debitis nobis perferendis doloribus voluptate assumenda.
            </p>
            <div className="w-80 flex-wrap md:flex-nowrap gap-4">
              <Input
                key="cpf"
                label=""
                placeholder="Insira seu CPF"
                name="cpf"
                variant="flat"
                color="primary"
                labelPlacement="outside"
              />
            </div>
          </div>
        </main>
      );
}   