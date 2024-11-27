import { useState } from "react";

export default function Partners(){
    const [Partnerlist] = useState({
        title:'our trusted partners',
        partners:[
            ' /partners/BackHub logo.png',
            ' /partners/CableLabs logo.png',
            ' /partners/DBS logo.png','/public/partners/EasyEuro logo.png'
            ,'/partners/AMD logo.png'
            
        ]
    })
    return (
       <>
<center className=" p-7 bg-[#07292F]  ">
    <p className="title text-Highlight font-light">{Partnerlist.title.toUpperCase()}</p> <br />
   <div className={`grid sm:flex justify-center w-full     md:gap-8 lg:gap-14 ` + `${window.innerWidth<730 ? 'gap-[0.03rem]':'gap-5'}`}> 
   {
        Partnerlist.partners.map((value,key)=>(
            <img key={key} src={value}   />

            
        ))
    }
   </div>
</center>

       </> 
    );
}