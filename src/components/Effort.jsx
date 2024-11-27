import { useState } from "react";

export default function Effor(){
    const [Effortlist] = useState({
        Title:'Allocate effort where your reps make an inpact.',
        subtitle:"Let us handle the rest.",
        des:"Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.",
    results: [{
        pertentage:'32%',
        subject:'Improvement in Open Rates'
    },{
        pertentage:'75%',
        subject:'Improvement in Ramp Time'
    },{
        pertentage:'35%',
        subject:'Improvement in Meetings Booked'
    }]
      })
    return (
        <>
        <div className="Effort grid gap-5 md:gap-10 m-10 sm:m-20 p-20 rounded-3xl">
            <div className=" Title  text-white text-2xl  sm:text-3xl ">{Effortlist.Title}</div>
            <div className=" Subtitle text-Highlight text-xl sm:text-2xl "><i>{Effortlist.subtitle}</i></div>
            <div className=" des text-gray-300 font-light  sm:w-80">{Effortlist.des}</div>
            <div className=" results flex-wrap flex lg:flex-nowrap gap-5 ">{Effortlist.results.map((value,key)=>(
                <div className="grid gap-2" key={key}>
<div className="percentage text-Highlight text-2xl sm:text-3xl font-bold">{value.pertentage}</div>
<div className="subject text-gray-200 w-32">{value.subject}</div>
                </div>
            ))}</div>
        </div>



        </>
    );
}