export default function RentalCard({data}){
    return (
        <div className="flex flex-col 
        bg-white rounded-sm
        text-black p-[2rem]
        justify-between gap-[1.25rem]
        min-w-[225px]">

            <h3>ID: <span className="text-sky-900 font-bold">{data.id}</span> </h3>

            <div className="flex flex-col ">
                <p>{data.clientName}</p>
                <p>{data.vehicleModel}</p>
                <p>{data.days} {data.days > 1 ? "dias" : "dia"}</p>
                <span>{data.totalValue} R$</span>
            </div>
            
        </div>
    );
}