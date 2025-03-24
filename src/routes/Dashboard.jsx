import InfoUser from "../component/InfoUser";
import DashboardLayout from "../layout/DashboardLayout";
import { useState } from "react";
import ViewProfessional from "../component/ViewProfessional";

export default function Dashboard() {
    
    const [userRol,setUserRol] = useState(true)    

    return <DashboardLayout>        
        <section className="bg-slate-100 w-full">
            <InfoUser />
            {
              userRol && <ViewProfessional/>                        
            }
        </section>
    </DashboardLayout>
}