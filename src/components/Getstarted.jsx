import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Getstarted(){
    const [Getstartedlist] = useState({
        Title:'GET STARTED'
        ,
     
        Des:"Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency."
        ,
        Action:'Sign Up for the Beta'
    })
    return (
     <>
     <center className="grid gap-10 items-center text-center my-10 p-10">
        <div className=" Title text-[#14BCB2]  text-[medium]">{Getstartedlist.Title}</div>
        <div className=" Message text-3xl text-white"><i>Embrace</i> <font className="font-bold">the new era of</font> <i>outbound.</i></div>
        <div className=" Des  font-light text-gray-300  flex justify-center "><font className=" px-20 lg:px-0 lg:w-[30%]">{Getstartedlist.Des}</font></div>
    <div className="flex justify-center">    <Button color="primary" variant="shadow" className=" Action  w-52 text-black">
       {Getstartedlist.Action} <img src="/public/Hero/Group.png" alt="" className=" w-3.5 pt-1"/>
       </Button> </div> 
     </center>
     </>   
    );
}