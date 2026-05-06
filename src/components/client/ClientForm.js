import { save } from "@/services/clientService"

export default function ClientForm(){
    return (
        <form className="flex flex-col gap-[3rem] flex-wrap items-start justify-start bg-white text-black rounded-md 
                p-[2rem]
                " action={save} autoComplete="off">

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="name">
                            Nome:
                        </label>
                        <input id="name" type="text" name="name" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="cnh">
                            CNH:
                        </label>
                        <input id="cnh" type="text" name="cnh" required={true} placeholder="00000000000"
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"></input>

                    </div>

                    <div className="flex flex-col justify-between items-start gap-[0.5rem]">
                        <label htmlFor="mail" >
                            Email:
                        </label>
                        <input id="mail" autoComplete="off" type="email" name="email" required={true} 
                        className="bg-sky-700 text-white rounded-sm px-[0.2rem] py-[0.15rem]"
                        placeholder="teste@gmail.com"></input>

                    </div>

                    <input className="rounded-sm bg-sky-900 px-[1.5rem] py-[0.5rem]
                    text-white
                    hover:bg-cyan-400 hover:text-black duration-300
                    cursor-pointer" type="submit"></input>
        </form>        
    )
}