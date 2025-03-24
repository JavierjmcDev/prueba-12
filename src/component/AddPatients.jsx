export default function AddPatients() {
    return (
        <form className="max-w-5xl mx-auto px-2 py-4 bg-slate-400">            
            <fieldset className="flex gap-2 flex-wrap flex-col">
                <input type="text" placeholder="Nombre" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0" />
                <input type="text" placeholder="Apellido" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0" />
                <input type="number" placeholder="Cédula de identidad" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0"/>
                <input type="text" placeholder="Ubicación" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0"/>
                <input type="email" placeholder="Correo" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0"/>
                <input type="number" placeholder="Número de telefono" className="p-2 rounded-md shadow-sm bg-slate-300 outline-0"/>
                <button className="bg-rose-800 text-slate-200 rounded-md p-2 hover:bg-rose-700">Añadir paciente</button>
            </fieldset>
         
        </form>
    )
    
}