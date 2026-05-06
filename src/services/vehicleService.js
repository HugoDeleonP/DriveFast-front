"use server";

import { API_URL, methodGet } from "./api"
import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils"

export async function save(vehicleData){
    const data = {
        brand: vehicleData.get("brand"),
        model: vehicleData.get("model"),
        licensePlate: vehicleData.get("licensePlate"),
        diaryValue: vehicleData.get("diaryValue")
    }
    
    const request = await fetch(`${API_URL}/vehicles`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    if(!request.ok){
        throw new Error("Falha ao cadastrar veiculo")
    }

    revalidatePath("/vehicles")
    redirect("/vehicles")
}

export async function findAll(){
    return methodGet("/vehicles")
}