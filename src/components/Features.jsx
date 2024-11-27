import { useState } from "react";

export default function Features(){
    const [Featurelist] = useState([
        {
            icon:'/Features/ph_magic-wand-duotone.png',
            title:"You’re in Control",
            des:'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
        },
        {
            icon:'/Features/ph_graph-duotone.png',
            title:"Infinitely Scalable",
            des:'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
        }
        ,
        {
            icon:'/Features/ph_arrows-out-cardinal-duotone.png',
            title:"Incredibly Flexible",
            des:'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
        }
    ])
    return (
        <>
        <div className="grid gap-14 p-5  sm:flex  justify-around md:p-0 md:py-10   h-fit">
           {Featurelist.map((value,key)=>(
             <div key={key} className={`grid top-0 w-fit` + `${key===2 ? ' gap-3 ' : ' '}`}>
             <div className="icon"><img src={value.icon} alt="" /></div>
             <div className={`title text-xl text-white font-bold ` + `${key===2 ? '  ' : ' '}`} >{value.title}</div>
             <div className="des    sm:w-40 md:w-52 text-wrap relative text-gray-300 font-light ">{value.des}</div>
         </div>
           ))}
        </div>
        </>
    );
}