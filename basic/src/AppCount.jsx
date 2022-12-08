import React, { useState } from 'react';
import './App.css'

function CountNumber({allNumber, setAllNumber}) {
    const [number, setNumber] = useState(0);

    return (
        <div className='counter'>
            <span className='number'>{number}<span className='general-number'>/{allNumber}</span></span>
            <button className='button' onClick={() => {
                // 複数updateする時や以前の値から演算する場合は
                // callback funcを使うことが安全だ
                setNumber((prev) => prev + 1);
                setAllNumber((prev) => prev + 1);
            }}>Add +</button>
        </div>
    )
}

function DisplayTotalCount({allNumber, setAllNumber}) {
    if (allNumber <= 10) {
        return <span className='all-number'>Total Count : {allNumber} ❄️</span>
    } else {
        return <span className='all-number'>Total Count : {allNumber} 🔥</span>
    }
    
}

export default function AppCount() {
    const [allNumber, setAllNumber] = useState(0);

    return (
        <div className='container'>
            {DisplayTotalCount({allNumber, setAllNumber})}
            {CountNumber({allNumber, setAllNumber})}/
            {CountNumber({allNumber, setAllNumber})}/
        </div>
    );
}

