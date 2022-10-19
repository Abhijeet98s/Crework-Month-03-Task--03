export default function Filter({ products, setProducts }) {

    const filterProduct = (catItem) => {
        const result = products.filter((item) => {
            return item.category === catItem
        })
        console.log(result);
        setProducts(result)
    }

    return (
        <>
            <div className="flex flex-wrap justify-start items-center mx-4 my-2 gap-3 text-white text-sm">
                <button className="p-2 bg-[#2e2e2e] rounded-md tracking-wider">All</button>
                <button onClick={() => filterProduct("men's clothing")} className="p-2 bg-[#2e2e2e] rounded-md tracking-wider">Men's Clothing</button>
                <button onClick={() => filterProduct("women's clothing")} className="p-2 bg-[#2e2e2e] rounded-md tracking-wider">Women's Clothing</button>
                <button onClick={() => filterProduct("jewelery")} className="p-2 bg-[#2e2e2e] rounded-md tracking-wider">Jewelery</button>
                <button onClick={() => filterProduct("electronics")} className="p-2 bg-[#2e2e2e] rounded-md tracking-wider">Electronics</button>
            </div>
        </>
    )
}

