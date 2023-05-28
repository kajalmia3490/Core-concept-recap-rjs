import React from 'react';
import {storage, removeFormDb, totalList} from '../storage/storage'

const Device = (props) => {
    const { userId, id, title, completed} = props.datas
    const addToCart = (id) => {
        // console.log('Item Selected', id)
        // localStorage.setItem(id,)
        storage(id)
    }

    const added = () => addToCart(userId);
    
    const removeFromStored = id => {
        // console.log('removing this content!', id)
        removeFormDb(id)
    }

    return (
        <div className='text-left border rounded border-gray-400 mt-3 w-80 p-3'>
            <h1> {id}. Name: <strong className='font-bold'>{userId}</strong> </h1>
            <p>Title: <strong>{title}</strong></p>
            <p>Completed: <strong>{completed ? 'True' : 'False'}</strong></p>
            <button
                onClick={added}
                className='mt-2 px-3 rounded p-1.5 bg-black text-white'>
                Add
            </button>
            <button
                onClick={() => added(userId)}
                className='mt-2 ml-0.5 px-3 rounded p-1.5 bg-green-600 text-white'>
                Call
            </button>
            <button
                className='rounded ml-0.5 mt-2 px-3 py-1.5 bg-red-600 text-white'
                onClick={() => removeFromStored(id)}>
                Remove
            </button>
        </div>
    );
};

export default Device;