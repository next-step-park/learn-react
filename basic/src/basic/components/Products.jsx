import React, { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log(
                    "🔥　温かい最新のデータがネットワークを通して届きました"
                );
                setProducts(data);
            });

        return () => console.log("🧺 不要なものを削除しております");
    }, [checked]);

    return (
        <div>
            <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onClick={() => setChecked((prev) => !prev)}
            />
            <label htmlFor="checkbox">Show Only 🔥 Sale</label>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
