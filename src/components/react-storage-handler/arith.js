import React from 'react';
import add from './add';
import sub from './sub';
import multi from './multi';
import { div, mod } from './div';

const Sum = () => {
    return (
        <div className='mt-10 mx-10 border border-gray-400 rounded p-4'>
            <h1 className='text-xl'>Some arithmatic operations</h1>
            <p> Your addition is: <strong> {add(49, 57)}</strong> </p>
            <p> Your subtraction is: <strong> {sub(546, 337)}</strong> </p>
            <p> Your multipplication is: <strong> {multi(45, 67)}</strong> </p>
            <p> Your division and modulus is: 
            <strong> {div(43, 5)}</strong> and <strong> {mod()}</strong> </p>
            
            <welcome className='text-xl font-bold font-sans'>Amazing!</welcome>
        </div>
    );
};

export default Sum;