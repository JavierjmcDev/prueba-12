export default function TablePatients( {patients} ) {

    console.log(patients)
    return(
        <table className="border mx-auto w-full sm:w-5xl py-6 bg-slate-300">
                <thead className="bg-slate-700 text-slate-200 grid grid-cols-6 py-2">
                    <tr className="col-span-1 text-center">Id</tr>
                    <tr className="col-span-2 text-center">Nombre</tr>
                    <tr className="col-span-2 text-center">Apellido</tr>
                    <tr className="col-span-1 text-center">Editar</tr>
                </thead>
                {
                    patients.map((patient,index)=>(
                        <tbody key={index} className="bg-slate-300 grid grid-cols-6 py-2">
                            <tr className="col-span-1 text-center">{patient.id}</tr>
                            <tr className="col-span-2 text-center">{patient.name}</tr>
                            <tr className="col-span-2 text-center">{patient.lastname}</tr>
                            <tr className="col-span-1 text-center">Editar</tr>
                        </tbody>
                    ))
                }
                
                
            </table>
    )    
}