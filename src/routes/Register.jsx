import DefaultLayout from "../layout/DefaultLayout";
import { Link } from "react-router-dom";


export default function Register() {
    return <DefaultLayout>
        <section className="h-[650px] flex items-center justify-center">
            <form className="bg-slate-300 w-[350px] rounded-md shadow-md overflow-hidden">
                <fieldset className="flex flex-col justify-center items-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 stroke-rose-700 opacity-35">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <h1 className="text-3xl">Crear cuenta</h1>
                </fieldset>
                <fieldset className="flex flex-col gap-6 bg-slate-700 p-6 rounded-t-md text-slate-200">
                    <input type="text" placeholder="Nombre de usuario" className="p-2 rounded-md shadow-sm bg-slate-600 outline-0" />
                    <input type="email" placeholder="Correo electronico" className="p-2 rounded-md shadow-sm bg-slate-600 outline-0" />
                    <input type="password" placeholder="Contraseña" className="p-2 rounded-md shadow-sm bg-slate-600 outline-0" />
                    <input type="password" placeholder="Repetir contraseña" className="p-2 rounded-md shadow-sm bg-slate-600 outline-0" />
                    <Link to={"/dashboard"} className="bg-rose-800 rounded-md text-slate-200 py-2 text-center font-semibold hover:bg-rose-700 transition">Crear cuenta</Link>
                    <fieldset className="flex flex-col items-center">
                        <span className="opacity-75">Ya tiene una cuenta?</span>
                        <Link className="hover:underline" to={"/login"}>Iniciar sesión</Link>
                    </fieldset>

                </fieldset>

            </form>
        </section>
    </DefaultLayout>
}