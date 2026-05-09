import Link from "next/link"

export default function NavBar(){
    return (
        <div className="bg-[#fff] w-[full] px-[1rem] py-[1rem] sm:px-[2rem] sm:py-[1rem] 
            flex flex-row justify-between gap-[1rem]
            ">
            
            <h1 className="text-black">DriveFast</h1>

            <nav className="">

                <ul className="text-black 
                    flex flex-row justify-between gap-[1rem] sm:gap-[2.5rem]
                    font-semibold ">
                    <li className="hover:text-sky-700"><Link href="/clients">Clientes</Link></li>
                    <li className="hover:text-sky-700"><Link href="/vehicles">Veículos</Link></li>
                    <li className="hover:text-sky-700"><Link href="/rentals">Locações</Link></li>
                </ul>

            </nav>

        </div>
    )
}