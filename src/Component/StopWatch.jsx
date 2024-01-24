import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)

    const formatTime = (secs) =>{
        const mins = Math.floor(secs/60)
        const remaningSecs = secs % 60
        return `${mins}:${remaningSecs < 10 ? "0" : ""}${remaningSecs}`
    }

    const toggleTime = () =>{
        setIsRunning((prevIsRunning) => !prevIsRunning)
    }

    const reset = () =>{
        setIsRunning(false)
        setElapsedTime(0)
    }


    useEffect(()=>{
        let intervalId;

        if(isRunning){
            intervalId = setInterval(()=>{
                setElapsedTime((prevElapsed)=> prevElapsed + 1)
            },1000)
        }else{
            clearInterval(intervalId)
        }
        return ()=> clearInterval(intervalId)
    },[isRunning])


  return (

    <div className='p-5'>
        <h1 className='font-bold text-4xl'>Stopwatch</h1>
        <br />
        <p>Time: {formatTime(elapsedTime)}</p>
        <br />
        <button className='bg-gray-400 m-2 outline w-14' onClick={toggleTime}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset} className='bg-gray-400 m-2 outline w-14'>Reset</button>
    </div>
  )
}

export default StopWatch