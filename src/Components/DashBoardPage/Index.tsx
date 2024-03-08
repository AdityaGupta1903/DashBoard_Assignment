import Header from "../Common/Headers";
import Sidebar from "./Sidebar";
import BreadCrumb from "../Common/BreadCrumb";
import { useLocation } from "react-router-dom";
const Index : React.FC<{}> = ()=>{
    const location = useLocation();
    console.log(location);
    return <div>
        <div>
         <Header/>
        </div>
        <div className="flex">
           <div className="w-auto"><Sidebar/></div>
           <div className="w-full pl-4 pr-8 pb-8 pt-2 h-screen bg-slate-100">
            <div><BreadCrumb/></div>
           <div className="bg-white p-8 h-full">
           <iframe src={location.state!=null ? location.state.Link : "https://instagram-clone-in.vercel.app/"} title="W3Schools Free Online Web Tutorials" className="w-2/3 h-3/4 ml-10"></iframe>
            </div> 
           </div>
           
        </div>
    </div>
}

export default Index;