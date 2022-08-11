import React, { useState } from 'react'

export default function Buttons() {

    const [active, setActive] = useState(1);

  return (
    <div>
        {active}
        <button onClick={() => setActive(1)} role="tab" id="tab-1_btn" aria-selected={active === 1} aria-controls="tab-1" type="button" class="reg-button">Tab 1 </button>

        <button onClick={() => setActive(2)} role="tab" id="tab-2_btn" aria-selected={active === 2} aria-controls="tab-2" type="button" class="reg-button">Tab 2</button>

        <button onClick={() => setActive(3)} role="tab" id="tab-3_btn" aria-selected={active === 3} aria-controls="tab-3" type="button" class="reg-button">Tab 3</button>

    </div>
  )
}
