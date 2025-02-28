const Card = () => {
    return(
        <div className="flex flex-row justify-evenly">            
        <div className="card bg-slate-50 sm-mx-28">
                <div className='grid grid-row-2'>
                    <h5 className="text-center text-white bg-black">Machinery</h5>
                    <h5 className="text-center text-white bg-black">MARKETPLACE</h5>
                </div>
                <p className='px-4 mt-2'>We connect special machinery, equipment and service provider with the global manufacturing industry.</p>
                <div className="flex justify-center">
                    <button 
                    type='button' 
                    onClick={() => {
                        console.log('Machinery button clicked');
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-8">Machinery</button>
                </div>
        </div>
            <div className="card bg-slate-50">
            <div className='grid grid-row-2'>
                <h5 className="text-center text-white bg-black">Consultant</h5>
                <h5 className="text-center text-white bg-black">MARKETPLACE</h5>
            </div>
                <p className='px-4 mt-2'>We connect consultants, coaches, and experts with the global manufacturing industry.</p>
                <div className="flex justify-center">
                    <button 
                    type='button' 
                    onClick={() => {
                        console.log('Consultant button clicked');
                    }}
                    className="bg-green-500 hover:bg-green-700 text-white mt-8 py-2 px-4">Consultant</button>
                </div>
            </div>
        </div>
    )
}

export default Card;