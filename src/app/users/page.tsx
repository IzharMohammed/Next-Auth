import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";

export default async function(){
    const session = await getServerSession();
    return <div>
        <Appbar />
       <div>Server side component {JSON.stringify(session)}</div> 
    </div>
}