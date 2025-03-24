export default function ButtonAddPatients() {
    return (
        <button className="bg-rose-800 hover:bg-rose-700 hover:px-4 active:bg-rose-600 rounded-full text-white flex items-center p-2 cursor-pointer group fixed bottom-4 right-4 transition-all">
            <span className="hidden group-hover:flex">
                Añadir paciente
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </button>
    )

}