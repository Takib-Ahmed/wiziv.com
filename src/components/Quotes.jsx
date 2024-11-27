import { button, Button } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

export default function Quotes(){

    const scrolledSection = useRef(null);

 

    const [Quoteslist] = useState({

        Buttons:['0','1','2'],
        Quotes:[
            {
                Quote:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                Name:'John Doe',
                Brand:'Chief Strategy Officer @ Company'
            },
            {
                Quote:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                Name:'John Doe',
                Brand:'Chief Strategy Officer @ Company'
            }
            ,
            {
                Quote:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                Name:'John Doe',
                Brand:'Chief Strategy Officer @ Company'
            }
        ]
    })

    let [Isactive,setIsactive] = useState(0)
 
    return (
       <>
<center className="relative">
<div className=" absolute top-[50%] flex justify-between  w-full">
 <Button color="" className="bg-[#96ACAF33]"  variant='faded' onClick={()=>{
    const Buttontoclick = document.querySelectorAll(".Dots");

    const nextActive = Isactive > 0 ? Isactive - 1 : 2;

   
    Buttontoclick[nextActive].click();

    setIsactive(nextActive);

   
 }} >
        Faded
      </Button> <Button color="danger" variant="faded" onClick={()=>{
    const Buttontoclick = document.querySelectorAll(".Dots");

    const nextActive = Isactive < 2 ? Isactive + 1 : 0;

   
    Buttontoclick[nextActive].click();

    setIsactive(nextActive);

   
 }}>
        Faded
      </Button> 
 </div>
<div className=" Quotes flex scroll-smooth  gap-10  ">

    {Quoteslist.Quotes.map((value,key)=>(
<div key={key} id={key} >
<div>
<div key={key}  ref={scrolledSection} className="items grid gap-5 m-20 w-screen items-center justify-center align-middle whitespace-nowrap" > 
       <div className="icon  "><div className=" bg-[#183A40] rounded-[50%] w-fit p-3 px-2 flex justify-center"><img src={'/public/Quotes/“.png'} alt="" /></div></div>
       <div className="quote text-2xl text-white  text-center flex justify-center"><center className=" text-center">{value.Quote}</center></div>
       <div className="name text-Highlight font-bold">{value.Name}</div>
       <div className="brand text-gray-300 font-light">{value.Brand}</div></div>
</div>
</div>
    ))}
</div>
 <div className="buttons flex  justify-center gap-5">
 {
Quoteslist.Buttons.map((value,key)=>(
    <a key={key} className={` text-9xl Dots ` +` `+`${Isactive==key? 'text-Highlight' : ' text-gray-200 '}` }href={'#'+value}  onClick={()=>{
        setIsactive(key)  
    }} id={'buttonfor' + key} >.</a>
))
}
 </div>

</center>




       </> 
    );
}