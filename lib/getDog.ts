"use server";
import { DogImage, Breed } from "@/types";

// fetches a dog image - random if no breed provided, or by breed name if provided
export default async function getDog(breedName?: string): Promise<DogImage> {
    const DOG_API_KEY = process.env.DOG_API_KEY;

    if (!DOG_API_KEY) {
        throw new Error("DOG_API_KEY environment variable is not set");
    }

    const headers = {
        'Accept': 'application/json',
        'x-api-key': DOG_API_KEY
    };

    try {
        let url = 'https://api.thedogapi.com/v1/images/search?has_breeds=true';
        
        // If breed name provided, search for breed first, then get image by breed_id
        if (breedName) {
            const breedRes = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`, { headers });
            if (!breedRes.ok) throw new Error(`Breed search failed with status ${breedRes.status}`);
            
            const breedData: Breed[] = await breedRes.json();
            if (!breedData || breedData.length === 0) {
                throw new Error(`Breed "${breedName}" not found`);
            }
            
            url = `https://api.thedogapi.com/v1/images/search?breed_id=${breedData[0].id}&has_breeds=true`;
        }

        const res = await fetch(url, { headers });
        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status}`);
        }

        const data: DogImage[] = await res.json();
        if (!data || data.length === 0) {
            throw new Error("No dog images returned from API");
        }

        return data[0];
    } catch (error) {
        console.error("Error fetching dog image:", error);
        throw error;
    }
}

