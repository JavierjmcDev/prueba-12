import Hero from "../component/Hero";
import History from "../component/History";
import Statists from "../component/Statists";
import Vision from "../component/Vision";
import DefaultLayout from "../layout/DefaultLayout";

export default function Home() {
    return <DefaultLayout>
        <Hero/>
        <Statists numberUser={1890}/>
        <Vision/>
        <History/>
    </DefaultLayout>    
}