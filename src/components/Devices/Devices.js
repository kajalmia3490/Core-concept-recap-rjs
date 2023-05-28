import React from 'react';
import Device from './Device';
import { totalList } from '../storage/storage';

const Devices = () => {
    const datas = [
        {
            "userId": 'Helen killer',
            "id": 1,
            "title": "An American Author",
            "completed": false
        },
        {
            "userId": 'Adam smith',
            "id": 2,
            "title": "The wealthy of nations",
            "completed": false
        },
        {
            "userId": 'Alexa',
            "id": 3,
            "title": "Sound Capacitor",
            "completed": false
        },
        {
            "userId": 'Robert',
            "id": 4,
            "title": "A Fighter",
            "completed": true
        },
        {
            "userId": 'Bruce',
            "id": 5,
            "title": "Co-fighter",
            "completed": false
        }
    ]
    
    const total = totalList(datas)
    
    return (
        <div className='mx-10'>
            <h1 className='text-2xl text-center my-5'>
                Employer Lists
            </h1>
            <p>Total Employer: <strong> {total} </strong></p>
            <div className='rounded border border-gray-300 p-10 flex col-3 gap-5'>
                {datas.map(data =>
                    <Device datas={data} />
                )}
            </div>
        </div>
    );
};

export default Devices;