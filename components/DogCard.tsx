import Image from "next/image";
import { DogImage } from "@/types";

export default function DogCard({ dog }: { dog: DogImage }) {
    const breed = dog.breeds?.[0];
    
    return (
        <div className="flex flex-col items-center m-10 sm:w-xl w-70 min-w-70 bg-slate-800 border-2 border-slate-600 shadow-2xl rounded-2xl p-5">
            <h2 className="text-3xl sm:text-5xl bg-gradient-to-r from-blue-600 to-blue-800 w-full rounded-t-2xl p-3 text-center text-white font-bold">
                {breed?.name || "Random Dog"}
            </h2>
            <div className="m-4">
                <Image
                    src={dog.url}
                    alt={breed?.name || "Dog"}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    unoptimized
                />
            </div>
            {breed && (
                <div className="w-full bg-slate-700 rounded-b-2xl p-4 space-y-2 text-slate-200">
                    {breed.life_span && (
                        <p className="text-lg"><span className="font-semibold text-blue-300">Life Span:</span> {breed.life_span}</p>
                    )}
                    {breed.breed_group && (
                        <p className="text-lg"><span className="font-semibold text-blue-300">Breed Group:</span> {breed.breed_group}</p>
                    )}
                    {breed.temperament && (
                        <p className="text-lg"><span className="font-semibold text-blue-300">Temperament:</span> {breed.temperament}</p>
                    )}
                    {breed.bred_for && (
                        <p className="text-lg"><span className="font-semibold text-blue-300">Bred For:</span> {breed.bred_for}</p>
                    )}
                </div>
            )}
        </div>
    );
}

