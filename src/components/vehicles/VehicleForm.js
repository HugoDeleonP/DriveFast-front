import { save } from "@/services/vehicleService"


export default function VehicleForm(){
    return (
        <form className="flex flex-col gap-[3rem] flex-wrap items-start justify-start bg-white text-black rounded-md 
                p-[2rem]
                " action={save} autoComplete="off">

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="brand">
                            Marca:
                        </label>
                        <input id="brand" type="text" name="brand" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="model">
                            Modelo:
                        </label>
                        <input id="model" type="text" name="model" required={true} placeholder=""
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="licensePlate" >
                            Placa:
                        </label>
                        <input id="licensePlate" autoComplete="off" type="text" name="licensePlate" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"
                        placeholder=""></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="diaryValue" >
                            Valor da diária:
                        </label>
                        <input id="diaryValue" autoComplete="off" type="text" name="diaryValue" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"
                        placeholder=""></input>

                    </div>

                    <input className="rounded-sm bg-sky-900 px-[1.5rem] py-[0.5rem]
                    text-white
                    hover:bg-cyan-400 hover:text-black duration-300
                    cursor-pointer" type="submit"></input>
        </form>        
    )
}