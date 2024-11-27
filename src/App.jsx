import { Button } from "@nextui-org/react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Train from "./components/Train";
import Quotes from "./components/Quotes";
import Effor from "./components/Effort";
import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners/>
      <Features/>
      <Train/>
      <Quotes/>
      <Effor/>
      <Getstarted/>
      <Footer/>
    </>
  );
}

export default App;
