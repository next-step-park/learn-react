import React, { useState } from 'react';

export default function Counter({func}) {

    return (
        <div className='counter'>
            {func}
        </div>
    );
}

