import { Button } from "@nextui-org/react";

export default function Hero(){
    return (
      <>
      <div className=" Hero  w-full">
<div className="grid gap-5 p-10 px-14">
  <div><p className="  text-Highlight  text-xl">AI SDRs (aiDRs)</p></div>
  <div><h1 className=" text-5xl text-white"><font className="font-bold">More</font> <i>leads,</i><br /> <font className="font-bold">less </font><i>people.</i></h1></div>
  <div><p className="  text-gray-300 font-thin">Train an aiDR on your ICP and messaging matrix. <br /> Activate it on a patch. It will send personalized <br /> sequences to every target contact.</p></div>
  <div><Button color="primary" variant="shadow">
        Sign up for the Beta 
      </Button>  </div>
</div>
      </div>



      </>  
    );
}