export default function ClientCard({data}){
    return (
        <div className="flex flex-col 
        bg-white rounded-sm
        text-black p-[2rem]
        justify-between gap-[1.25rem]
        min-w-[225px]">

            <h3>ID: <span className="text-sky-900 font-bold">{data.id}</span> </h3>

            <div className="flex flex-col ">
                <h3>{data.name}</h3>
                <p>{data.cnh}</p>
                <span>{data.email}</span>
            </div>
            
        </div>
    );
}