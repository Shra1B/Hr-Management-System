import { useEffect, useState } from "react";

function Product() {
    let [name, setName] = useState("Shravan");
    let [age, setAge] = useState(20);

    useEffect(() => {
        console.log('rendered')
        return function()
        {
            console.log("unnmounted");
        };
    }, [age]);

    return (
        <div className="Product">
            <h3>Samsung</h3>
            <h2>{name}</h2>
            <button onClick={() => {
                setName('Yoyo');
            }}>Click</button>
            <h3>{age}</h3>
            <button onClick={() => { setAge(25); }}>CLIcked</button>
        </div>
    );
}

export default Product;
