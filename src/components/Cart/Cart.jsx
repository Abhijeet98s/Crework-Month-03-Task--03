import { useState, useEffect } from "react";

export default function Cart({ cartProducts, setCartProducts }) {
    const [total, setTotal] = useState(0)

    const handleRemove = (id) => {
        const arr = cartProducts.filter((item) => item.id !== id);
        setCartProducts(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let totalAmount = 0;
        cartProducts.map((item) => (totalAmount += item.price * item.total));
        setTotal(totalAmount);
    };

    useEffect(() => {
        handlePrice();
    });


    return (
        <div tabIndex={0} className="card card-compact dropdown-content w-full bg-base-100 rounded-none">
            <div className="card-body container max-w-full min-h-screen">
                {cartProducts.length === 0 && (
                    <img className="absolute top-[20%] left-[35%]" height={1200} width={400} src="./images/empty-cart.png" alt="" />
                )}
                {cartProducts.map((item, ind) => {
                    return (
                        <div key={ind} className="text-black flex justify-evenly items-center px-36 py-10 m-0">
                            <img className="w-20" src={item.image} alt="product-image" />
                            <h1 className="text-black">{item.title}</h1>
                            <div className="flex justify-evenly items-center">
                                <button className="p-2 m-2 rounded-lg bg-gray-200">+</button>
                                <button className="p-2 m-2 rounded-lg bg-gray-200">-</button>
                            </div>
                            <span>Quantity: 1</span>
                            <h1>$ {item.price}</h1>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

