import React, { useEffect, useState } from "react";

export default function useProducts({ checked }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log(
                    "🔥　温かい最新のデータがネットワークを通して届きました"
                );
                setProducts(data);
            })
            .catch((e) => setError("エラーが発生した！"))
            .finally(() => setLoading(false));

        return () => console.log("🧺 不要なものを削除しております");
    }, [checked]);

    return [loading, error, products];
}
