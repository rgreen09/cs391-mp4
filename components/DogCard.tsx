import Image from "next/image";
import { DogImage } from "@/types";

export default function DogCard({ dog }: { dog: DogImage }) {
    const breed = dog.breeds?.[0];
    
    return (
        <div className="flex flex-col items-center m-6 sm:w-4xl w-full max-w-2xl bg-slate-800 border-2 border-slate-600 shadow-2xl rounded-2xl p-5">
            <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-800 w-full rounded-t-2xl p-2 text-center text-white font-bold mb-4">
                {breed?.name || "Random Dog"}
            </h2>
            <div className="flex flex-row gap-4 justify-center">
                <div className="flex-shrink-0">
                    <Image
                        src={dog.url}
                        alt={breed?.name || "Dog"}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg object-cover"
                        unoptimized
                    />
                </div>
                {breed && (
                    <div className="w-[300px] flex-shrink-0 bg-slate-700 rounded-lg p-4 space-y-2 text-slate-200">
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
        </div>
    );
}

