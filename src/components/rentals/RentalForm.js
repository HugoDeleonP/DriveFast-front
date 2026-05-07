import { save } from "@/services/rentalService"

export default function ClientForm(){
    return (
        <form className="flex flex-col gap-[3rem] flex-wrap items-start justify-start bg-white text-black rounded-md 
                p-[2rem]
                " action={save} autoComplete="off">

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="client">
                            Cliente:
                        </label>
                        <input id="client" type="number" name="client" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="vehicle">
                            Veículo:
                        </label>
                        <input id="vehicle" type="number" name="vehicle" required={true}
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="days" >
                            Dias:
                        </label>
                        <input id="days" autoComplete="off" type="number" name="days" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"
                        ></input>

                    </div>

                    <input className="rounded-sm bg-sky-900 px-[1.5rem] py-[0.5rem]
                    text-white
                    hover:bg-cyan-400 hover:text-black duration-300
                    cursor-pointer" type="submit"></input>
        </form>        
    )
}