import React, { useEffect, useState } from 'react';

export default function TestDispatch() {
    const [searchTerm,setSearchTerm] = useState();
    // const [dummy,setDummy] = useState();
    useEffect( () => {
        document.querySelector("#searchTerm").dispatchEvent(new KeyboardEvent('keydown',{'key':'a'}));
    },[searchTerm])

  return (
    <div>
        {/* <button onClick={() => setDummy(new Date())}>Click Me</button> */}
        <input id="searchTerm" type="text" value={searchTerm} onChange={evt => {
            setSearchTerm(evt.target.value);
        }} />
    </div>
  );
}
