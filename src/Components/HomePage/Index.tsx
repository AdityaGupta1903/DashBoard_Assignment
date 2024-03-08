import ModalComponent from "./ModalComponent";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import ProjectCardModalType from "../../TypeDefs/ProjectAddCardModal";
import Header from "../Common/Headers";
import BreadCrumb from "../Common/BreadCrumb";

function Index() {
     //const undefinedVariable: any = undefined;
     //console.log(undefinedVariable.nonExistentProperty);
 const[ProjectDetails,SetProjectDetails] = useState<ProjectCardModalType[]>([]);
    useEffect(()=>{
       const StringDataFromLocalStorage = localStorage.getItem("Projects");
       if(StringDataFromLocalStorage!=null){
         SetProjectDetails(JSON.parse(StringDataFromLocalStorage));
       }
    },[])
    function SetProject(Prop:ProjectCardModalType){
        SetProjectDetails((prev)=>{
            return [...prev, Prop];
        })
    }
     return <>
    <Header/>
       
    <div className="bg-slate-100 h-screen pl-7 pr-7 pb-7">
        <BreadCrumb/>
    <div className="bg-white h-full">
        <ModalComponent SetProjectDetails = {SetProject}/>
        <Cards ProjectDetails = {ProjectDetails} />
    </div>
    
    </div>
    </>
}

export default Index;