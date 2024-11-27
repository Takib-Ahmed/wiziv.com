
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useState } from "react";

export default function Header(){

  const [Navitems] = useState(
{
  
  Links:['About Us','Pricing','Customers','Solutions'],
  Buttons:[
{
  innertext:'Book a Demo',
  variant:'flat',
  radius:'full',
  color:'primary',
  bg:'bg-[#0FF1F6]'
  
},
{
  innertext:'Contract Us',
  variant:'ghost',
  radius:'full',
  color:'defualt',
}
    
  ]
}


  )
    return (
        <>
         <Navbar className=" w-screen  bg-transparent  top-0  items-end px-14 lg:px-16 "  position="sticky" >
      <NavbarBrand>
     <img src="/public/Logo/Logo.png" alt="" />
    </NavbarBrand>
      <NavbarContent className=" hidden lg:flex gap-10  right-0" justify="center">
       {
        Navitems.Links.map((value,key)=>(
          <NavbarItem key={key}>
          <Link  href="#"  className=" text-white hover:text-primary"  >
         {
          value
         }
          </Link>
        </NavbarItem>
        ))
       }
    
      </NavbarContent>
      <NavbarContent justify="end" className=" justify-end"  >
     
     {
      Navitems.Buttons.map((value,key)=>(
        <NavbarItem key={key}>
        <Button as={Link} className={` text-white  ` + `${value.bg}`}color={value.color} href="#" variant={value.variant} radius={value.radius}>
      {value.innertext}
        </Button>
      </NavbarItem>
      ))
     } 
     
      </NavbarContent>
    </Navbar>
        
        </>
    );
}