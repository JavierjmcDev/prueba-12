import ItemListHistory from "./ItemListHistory";

export default function History() {
    const dataHistory = [
        {
            time: 2011,
            description: "Inicio del proyecto" 
        },
        {
            time: 2012,
            description: "Llegamos a 100k donantes" 
        },
        {
            time: 2015,
            description: "Cambiamos nuestra sede a sedeActual" 
        }
    ]
    return (
        <section className="bg-slate-300 py-6">
            <h2 className="font-semibold text-rose-800 text-3xl text-center mb-6">Conoce nuestra historia</h2>
            <ul className="space-y-2 list-inside px-6 sm:px-0 max-w-5xl mx-auto">
                {
                    dataHistory.map((item, index)=>(
                        <ItemListHistory key={index} time={item.time} description={item.description} />
                    ))
                }
                <ItemListHistory/>                                         
            </ul>
        </section>
    )
    
}