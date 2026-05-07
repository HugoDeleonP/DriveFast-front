"use server";

import { API_URL, methodGet } from "./api"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function save(vehicleData){
    const data = {
        clientId: vehicleData.get("client"),
        vehicleId: vehicleData.get("vehicle"),
        days: vehicleData.get("days")
    }
    
    const request = await fetch(`${API_URL}/rentals`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    if(!request.ok){
        throw new Error("Falha ao cadastrar locação")
    }

    revalidatePath("/rentals")
    redirect("/rentals")
}

export async function findAll(){
    return methodGet("/rentals")
}