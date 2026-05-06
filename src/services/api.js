export const API_URL = "http://localhost:8081/api";

export async function methodGet(path){
    const response = await fetch(`${API_URL}${path}`,
        {next: {revalidate: 20}}
        );
     
    return await response.json();
}

