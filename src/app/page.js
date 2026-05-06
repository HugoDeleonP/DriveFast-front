import Image from "next/image";
import NavBar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#1F1f1f] 
      py-[2rem]
      gap-10">
            
      <main className="flex flex-1 flex-col items-center gap-[5rem] sm:items-start">
        
        <div className="flex flex-col gap-[2rem]">

          <h2 className="text-[2rem] font-semibold
            ">Descrição</h2>

          <div className="rounded-sm bg-white p-[2rem] max-w-[50vw]
          flex flex-col gap-[1rem]
          text-black">
            <p>
              DriveFast é uma aplicação front-end utilizando Next.js para
            consumir a API DriveFast, criada na atividade de backend.
            </p>

            <p>
              O objetivo não é criar um sistema completo com todas as funcionalidades possíveis, mas
            sim construir uma primeira versão funcional da interface, integrando o front-end com os
            principais recursos da API.
            </p>

            <p>
              A API DriveFast possui recursos para gerenciamento de clientes, veículos e locações,
            além de regras como cálculo automático do valor total da locação e alteração da
            disponibilidade do veículo.
            </p>
          </div>


        </div>

        <div className="flex flex-col gap-[2rem] w-[100%]">

          <h2 className="text-[2rem] font-semibold
            ">Funcionalidades</h2>

          <div className=" max-w-[50vw]
          flex flex-row justify-evenly gap-[1rem] px-[1rem]
          text-black">
            <Button message="Clientes" href="/clients"/>
            <Button message="Veículos" href="/vehicles"/>
            <Button message="Locações" href="/rentals"/>
          </div>


        </div>

      </main>
    </section>
  );
}
