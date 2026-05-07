import { findAll } from "@/services/rentalService";
import RentalCard from "@/components/rentals/RentalCard";
import RentalForm from "@/components/rentals/RentalForm";

export default async function Vehicle(){
    
    const rentals = await findAll();
    
    return(
        <section className="flex flex-col items-center flex-1 w-[100%] bg-zinc-50 font-sans dark:bg-[#1F1f1f]
        px-[18.75rem] py-[2rem] 
        gap-10">
            
            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Locações cadastradas
                </h2>

                <div className="flex flex-row gap-[3rem] flex-wrap justify-center">
                    {rentals.map( rental => {
                        return (
                            <RentalCard key={rental.id} data={rental} />
                        );
                    })}
                </div>        
            </div>

            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Formulário para cadastrar locações
                </h2>

                <RentalForm/>
            </div>

            

        </section>
    );
}