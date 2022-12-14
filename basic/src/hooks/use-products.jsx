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
                    "๐ฅใๆธฉใใๆๆฐใฎใใผใฟใใใใใฏใผใฏใ้ใใฆๅฑใใพใใ"
                );
                setProducts(data);
            })
            .catch((e) => setError("ใจใฉใผใ็บ็ใใ๏ผ"))
            .finally(() => setLoading(false));

        return () => console.log("๐งบ ไธ่ฆใชใใฎใๅ้คใใฆใใใพใ");
    }, [checked]);

    return [loading, error, products];
}
