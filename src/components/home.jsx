const Home = () => {
    return (
        <div className='main'>
            <div className='contents'>
                <h1 className="text-white drop-shadow-lg">JOIN THE FIRST GLOBAL
                INDUSTRIAL MACHINERY
                ECOSYSTEM!</h1>
            </div>
            <div>
                <p className="text-md px-48 mb-20 text-white">Become a part of the first global marketplace that covers your special needs within the machine and plant engineering industry and digitize your business.</p>
            </div>
            <video 
            src='/video.mp4'
            autoPlay 
            muted 
            loop
            className='video'
            />
        </div>
    )
}   

export default Home;