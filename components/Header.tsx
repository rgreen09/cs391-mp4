import Link from "next/link";

export default function Header() {
    const linkStyling = "text-2xl hover:text-blue-300 transition-colors";

    return (
        <header className="flex items-center w-screen bg-slate-900 border-b-2 border-slate-700 pl-5 absolute top-0 shadow-lg">
            <h1 className="text-4xl font-semibold text-white"> CS391 Dog App</h1>
            <nav className="m-5 ml-10">
                <Link href="/" className={linkStyling}>Home</Link>
            </nav>
        </header>
    );
}

