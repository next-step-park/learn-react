import React, { useEffect, useState } from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('data/products.json')
        .then((res)=> res.json())
        .then((data)=> {
            console.log('🔥　温かい最新のデータがネットワークを通して届きました');
            setProducts(data);
        })

        return ()=> console.log('🧺 不要なものを削除しております')
    }, [])
    
    

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>{count}</button>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))

                }
            </ul>
        </div>
    );
}

