import Link from "next/link"

export default function NavBar(){
    return (
        <div className="bg-[#fff] w-full px-[2rem] py-[1rem] 
            flex flex-row justify-between gap-[1rem]">
            
            <h1 className="text-black">DriveFast</h1>

            <nav className="">

                <ul className="text-black 
                    flex flex-row justify-between gap-[2.5rem]
                    font-semibold ">
                    <li className="hover:text-sky-700"><Link href="/clients">Client</Link></li>
                    <li className="hover:text-sky-700"><Link href="/vehicles">Vehicles</Link></li>
                    <li className="hover:text-sky-700"><Link href="/rentals">Rentals</Link></li>
                </ul>

            </nav>

        </div>
    )
}