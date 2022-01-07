import React, { useEffect, useState } from 'react';

export default function Timeout() {
    const [timer,setTimer] = useState();
    const [searchTerm,setSearchTerm] = useState();
    // const [dummy,setDummy] = useState();
    useEffect( () => {
        console.log("The timer is now counting down.");
        setTimer(clearTimeout(timer));
        setTimer(setTimeout( () => {
            console.log("5 seconds have passed");
        },5000))
    },[searchTerm])

  return (
    <div>
        {/* <button onClick={() => setDummy(new Date())}>Click Me</button> */}
        <input type="text" value={searchTerm} onChange={evt => {
            setSearchTerm(evt.target.value);
        }} />
    </div>
  );
}
