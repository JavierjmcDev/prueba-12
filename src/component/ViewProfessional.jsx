import { useState } from "react";
import TablePatients from "../component/TablePatienets";
import ButtonAddPatients from "../component/ButtonAddPatients";


export default function ViewProfessional() {
    const [patients, setPatients] = useState([
        {
            name: "Nombre 1",
            lastname: "Apellido 1",
            id: 1
        },
        {
            name: "Nombre 2",
            lastname: "Apellido 2",
            id: 2
        },
        {
            name: "Nombre 3",
            lastname: "Apellido 3",
            id: 3
        },
        {
            name: "Nombre 4",
            lastname: "Apellido 4",
            id: 4
        }

    ])
    return (
        <>
            <ButtonAddPatients />
            <TablePatients patients={patients} />
        </>
    )
}