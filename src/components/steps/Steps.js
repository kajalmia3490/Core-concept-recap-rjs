import React, { useEffect, useState } from 'react';

const Steps = () => {
    const [steps, setSteps] = useState(0)

    const stepIncrease = () => {
        const newSteps = steps + 1
        setSteps(newSteps)
    }
    
    useEffect(() => {
        console.log(steps)
    }, [steps])
    
    return (
        <div className='text-center border p-5 mt-5 w-auto'>
            <h1
                className='text-xl'>
                This is your step:
                <strong> {steps}</strong>
            </h1>
            <button
                className='border bg-gray-300 rounded p-1.5 mt-3'
                onClick={stepIncrease}>
                Move Step
            </button>
        </div>
    );
};

export default Steps;