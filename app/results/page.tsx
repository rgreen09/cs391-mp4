import getDog from "@/lib/getDog";
import DogCard from "@/components/DogCard";
import Link from "next/link";

interface ResultsPageProps {
    searchParams: Promise<{ breed?: string }>;
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
    const params = await searchParams;
    const breedName = params.breed?.trim() || undefined;

    try {
        const dog = await getDog(breedName);

        return (
            <div className="flex flex-col items-center justify-start min-h-screen pt-20">
                <div className="flex flex-col items-center mb-6 pt-6">
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-lg"
                    >
                        ← Back to Search
                    </Link>
                </div>
                <DogCard dog={dog} />
            </div>
        );
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to fetch dog image. Please try again.";
        
        return (
            <div className="flex flex-col items-center justify-start min-h-screen pt-20">
                <div className="flex flex-col items-center mb-6 pt-6">
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-lg"
                    >
                        ← Back to Search
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center bg-slate-800 rounded-lg p-6 w-75 sm:w-130 border-2 border-slate-600 shadow-2xl">
                    <h2 className="text-center text-3xl font-semibold m-2 text-white">Error</h2>
                    <p className="text-red-200 mt-3 text-center bg-red-800 px-4 py-2 rounded border border-red-600">
                        {errorMessage}
                    </p>
                </div>
            </div>
        );
    }
}

