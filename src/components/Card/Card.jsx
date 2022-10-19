export default function Card({ id, title, price, image, category, addToCart, getProductDetails }) {

    return (
        <div className="m-5">
            <div className="flex flex-col justify-between w-96 h-[26rem] overflow-hidden rounded-lg shadow-lg bg-white box-shadows">
                <div className="px-4 py-2">
                    <h1 className="text-[18px] text-center font-bold max-w-full h-10 text-black">
                        {title.length > 80 ? title.slice(0, 60) + "..." : title}
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-8" >
                    <img onClick={() => getProductDetails()} className="w-48 h-48 cursor-pointer" src={image} alt="product-images" />
                </div>
                <p className="text-md pl-3 pt-10 capitalize font-bold text-black">Category: {category}</p>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-[25px] font-bold text-white"> $ {price}</h1>
                    <button onClick={() => addToCart({ id, title, price, image })} className="px-2 py-1 text-[15px] font-semibold text-gray-900 uppercase bg-white rounded hover:bg-gray-200">Add to cart</button>
                </div>
            </div>
        </div>
    )
}


