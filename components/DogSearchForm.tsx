"use client"
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function DogSearchForm() {
    const [breedName, setBreedName] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const trimmedBreed = breedName.trim();
        if (trimmedBreed) {
            router.push(`/results?breed=${encodeURIComponent(trimmedBreed)}`);
        } else {
            router.push("/results");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col justify-center items-center bg-slate-800 rounded-lg p-6 w-75 sm:w-130 border-2 border-slate-600 shadow-2xl"
                  onSubmit={handleSubmit}
            >
                <h2 className="text-center text-3xl font-semibold m-2 text-white">Dog Images</h2>

                <p className="text-center text-lg mb-4 text-slate-300">
                    Enter a breed name to search, or leave empty for a random dog!
                </p>

                <input
                    type="text"
                    value={breedName}
                    onChange={(e) => setBreedName(e.target.value)}
                    placeholder="Enter dog breed (e.g. Golden Retriever, Husky)"
                    className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full shadow-lg"
                    type="submit"
                >
                    {breedName.trim() ? "Search Breed" : "Get Random Dog"}
                </button>
            </form>
        </div>
    );
}

