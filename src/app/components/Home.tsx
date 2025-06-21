'use client'
import { useState } from "react";
import Accordion from "./accordion";

export default function Home(){
    const [multiOpen, setMultiOpen] = useState(true);
    return (<>
        <button onClick={() => setMultiOpen((prev) => !prev)}>
             MultiOpen is  : {multiOpen ? 'ON' : 'OFF'}
             </button>
        <Accordion multiOpen={multiOpen}/>
    </>)
}   