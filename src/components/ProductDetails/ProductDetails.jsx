export default function ProductDetails() {

    return (
        <>
            <section>
                <div className="container flex justify-center items-center space-x-64 m-10">
                    <div className="w-96">
                        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="image" alt="product" />
                    </div>
                    <div className="details flex flex-col justify-center items-start space-y-5">
                        <div className="title">
                            <h1 className="text-4xl">Shoes</h1>
                            <h3 className="text-lg">Men's Clothing</h3>
                        </div>
                        <p className="text-xl w-96">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, odio!</p>
                        <div className="">
                            <p className="text-3xl">Price: $ 100</p>
                        </div>
                        <div className="">
                            <button className="px-2 py-1 text-xl font-semibold text-gray-900 capitalize bg-green-500 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
