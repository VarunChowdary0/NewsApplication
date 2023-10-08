import { useState } from "react";

const Toggle=()=>{
    const [Mode,changeMode]=useState(localStorage.getItem("mode")||"");
    document.body.classList.toggle(Mode);

    const Shift = ()=>{
        changeMode('dark');
        localStorage.setItem("mode","dark");
    }
}

export default Toggle;