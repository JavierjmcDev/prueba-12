import { Link } from "react-router-dom";

export default function Hero() {
    return(
        <section className="bg-slate-900 text-slate-200 min-h-[600px] flex justify-center items-center">
            <div className="max-w-[450px] flex flex-col items-center gap-4">
                <h1 className="font-semibold text-4xl">Juntos somos esperanza</h1>
                <p>
                    Únete a nuestra comunidad de donantes y cambia vidas.
                    Si necesitas un trasplante, este es tu primer paso hacia la vida. 
                </p>
                <Link to="/register" className="bg-slate-200 text-slate-800 px-8 py-2 rounded-md hover:bg-slate-300 font-semibold"> Comenzar ahora </Link>
            </div>
        </section>
    )    
}