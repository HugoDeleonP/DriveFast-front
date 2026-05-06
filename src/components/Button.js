import Link from "next/link"

export default function Button({message, href}){

    return(
        <Link className="rounded-sm bg-white px-[1.5rem] py-[0.5rem]
        hover:bg-cyan-200 duration-300
        " href={href}>
            {message}
        </Link>
    )

}