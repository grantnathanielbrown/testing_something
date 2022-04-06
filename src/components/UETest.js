import React, { useEffect, useState } from 'react'

export default function UETest() {
    const [bool, setBool] = useState(false)
    useEffect(() => {
        console.log("im rendoooooring!")
    })
  return (
    <button onClick={() => setBool(!bool)}>Hello</button>
  )
}
