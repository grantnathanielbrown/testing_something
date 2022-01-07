import React, { useState } from 'react';
import { useEffect } from 'react';

export default function UEQueue() {
    const [results, setResults] = useState();

    const [queue, setQueue] = useState({
        isProcessing: false,
        tasks: []
    });

    useEffect(() => {
        console.log("Queue has been changed");
        if (queue.tasks.length === 0) return
        if (queue.isProcessing) return
        const task = queue.tasks[0];
        setQueue((prev) => ({
          isProcessing: true,
          tasks: prev.tasks.slice(1),
        }));
    
        Promise.resolve(task).finally(() => {
          setQueue((prev) => ({
            isProcessing: false,
            tasks: prev.tasks,
          }))
        });

    }, [queue]);

    function addTask(task) {
        setQueue((prev) => ({
            isProcessing: prev.isProcessing,
            tasks: [...prev.tasks, task]
        }));
    };

    function randomDurationCall(min, max, order) {
        console.log(order);
        min = Math.ceil(min);
        max = Math.floor(max);
        let int = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

        setTimeout(() => {
            setResults(`This is order #${order}`)
        }, int)
      }


      useEffect( () => {
        randomDurationCall(1000,5000,1);
        randomDurationCall(1000,5000,2);
        randomDurationCall(1000,5000,3);
      },[])
      




    return (
        <div>
            {results}
        </div>
    )
}
