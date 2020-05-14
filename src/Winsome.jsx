import React, { useState, useEffect } from 'react';
import ok from '/Users/grant/Desktop/testing_something/src/images/ok.jpg'

function Winsome() {
    const [width, setWidth] = useState({width:10 + '%'});
    const [scroll, setScroll] = useState(window.pageYOffset);

    function onScroll(){
        const offset = window.pageYOffset;
        console.log(offset);
        // update value of scroll variable
        setScroll(offset);
        // update value of width variable
        setWidth({width:(10 + offset/5) + '%'});
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      });

      let imageWidth;
      
      console.log(width.width.substring(0,3));
      width.width.substring(0,3) > 100 ? imageWidth = {width: "100%"} : imageWidth = width   
    return (
        <div >
            <section >
                <img style={imageWidth} src={ok} alt="ok"/>

            </section>
            <section >
                <h2 >"Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
            </section>
        </div>
    )
}

export default Winsome;