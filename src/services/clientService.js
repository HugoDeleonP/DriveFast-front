"use server";

import { revalidatePath } from "next/cache"
import { API_URL, methodGet } from "./api"
import { redirect } from "next/navigation";
export async function save(clientData){
    const data = {
        name: clientData.get("name"),
        cnh: clientData.get("cnh"),
        email: clientData.get("email")
    }
    
    const request = await fetch(`${API_URL}/clients`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    if(!request.ok){
        throw new Error("Falha ao cadastrar cliente")
    }

    revalidatePath("/clients")
    redirect("/clients")
}

export async function findAll(){
    return await methodGet("/clients")
}