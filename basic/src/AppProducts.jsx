import React, { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
    const [isToggleClicked, setIsToggleClicked] = useState(false);

    return (
        <div>
            {isToggleClicked && <Products />}
            <button onClick={()=>setIsToggleClicked(!isToggleClicked)}>Toggle</button>
        </div>
    );
}

