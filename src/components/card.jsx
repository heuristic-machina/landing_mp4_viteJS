const Card = () => {
    return(
        <div className="flex flex-row justify-evenly">
            <div className="card">
                <h5 className="text-center text-blue-700">Machinery MARKETPLACE</h5>
                <p class="">We connect special machinery, equipment and service provider with the global manufacturing industry.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded object-contain">Machinery</button>
            </div>
            <div className="card">
                <h5 className="text-center text-green-700">Consultant MARKETPLACE</h5>
                <p class="">We connect consultants, coaches, and experts with the global manufacturing industry.</p>
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ">Consultant</button>
            </div>
        </div>
    )
}

export default Card;