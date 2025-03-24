import { Link } from "react-router-dom";

export default function DefaultLayout({ children }) {
    return (
        <main className="bg-slate-200 text-slate-700 min-h-screen">

            <header className="flex justify-between max-w-5xl mx-auto py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-rose-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <nav>
                    <ul className="grid grid-cols-5 gap-1">
                        <li className="hover:bg-slate-300 text-center py-2 rounded-md font-semibold transition"><Link href="">Home</Link></li>
                        <li className="hover:bg-slate-300 text-center py-2 rounded-md font-semibold transition"><Link href="">Visión</Link></li>
                        <li className="hover:bg-slate-300 text-center py-2 rounded-md font-semibold transition"><Link href="">Contacto</Link></li>
                        <li className="hover:bg-slate-300 text-center py-2 rounded-md font-semibold transition"><Link to="/login">Login</Link></li>
                        <li className="bg-rose-800 px-4 py-2 rounded-md text-slate-200 font-semibold hover:bg-rose-700 transition"><Link to="/register">Registro</Link></li>

                    </ul>
                </nav>

            </header>
            <section className="">
                {children}
            </section>
        </main>
    )
}