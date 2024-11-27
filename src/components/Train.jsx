import { useState } from "react";

export default function Train(){

  const [Traindetaillist] = useState({
    Title:'Train your aiDR on your...',
    subtitle:"prefered email st|",
    des:"You’re in control. Train your aiDR on elements of your Marketing strategy.",
    benefits:['Quick to ramp','Easy to optimize','Quick to scale up','Works with all your existing tools']
  })
    return (
      <>
      <div className="train  justify-end items-end grid gap-10 p-5 sm:p-10 m-10 sm:m-16  py-30 rounded-3xl">
        <div className="Title text-white text-3xl">
          {Traindetaillist.Title}
          <div className="subtitle text-2xl text-Highlight">
         <i> {Traindetaillist.subtitle}</i>
        </div>
        </div>
      
        <div className="traindes text-gray-300 sm:w-80">
{
  Traindetaillist.des
}
        </div>
        <div className="benefits flex gap-5 flex-wrap     w-[59.5%]">
          {
            Traindetaillist.benefits.map((value,key)=>(
              <div key={key} className=" text-Light flex gap-2">
               <img src="/public/Train/Group.png" alt=""  className="w-5 h-5"/> <font className=' translate-y-[-3px] font-normal'>{value}</font>
              </div>
            ))
          }
        </div>
      </div>
      
      
      </>  
    );
}