import { findAll } from "@/services/vehicleService";
import VehicleCard from "@/components/vehicles/VehicleCard";
import VehicleForm from "@/components/vehicles/VehicleForm";


export default async function Vehicle(){
    
    const vehicles = await findAll();
    
    return(
        <section className="flex flex-col items-center flex-1 w-[100%] bg-zinc-50 font-sans dark:bg-[#1F1f1f]
        px-[18.75rem] py-[2rem] 
        gap-10">
            
            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Veículos cadastrados
                </h2>

                <div className="flex flex-row gap-[3rem] flex-wrap justify-center">
                    {vehicles.map( vehicle => {
                        return (
                            <VehicleCard key={vehicle.id} data={vehicle} />
                        );
                    })}
                </div>        
            </div>

            <div className="flex flex-col gap-12">
                <h2 className="self-center text-[1.5rem] font-semibold">
                    Formulário para cadastrar veículos
                </h2>

                <VehicleForm/>
            </div>

            

        </section>
    );
}