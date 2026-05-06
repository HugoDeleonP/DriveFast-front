import { findAll } from "@/services/clientService";
import ClientCard from "@/components/client/ClientCard";
import ClientForm from "@/components/client/ClientForm";
export default async function Client(){
    
    const clients = await findAll();
    
    return(
        <section className="flex flex-col items-center flex-1 w-[100%] bg-zinc-50 font-sans dark:bg-[#1F1f1f]
        px-[18.75rem] py-[2rem] 
        gap-10">
            
            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Clientes cadastrados
                </h2>

                <div className="flex flex-row gap-[3rem] flex-wrap justify-center">
                    {clients.map( client => {
                        return (
                            <ClientCard key={client.id} data={client} />
                        );
                    })}
                </div>        
            </div>

            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Formulário para cadastrar clientes
                </h2>

                <ClientForm/>
            </div>

            

        </section>
    );
}