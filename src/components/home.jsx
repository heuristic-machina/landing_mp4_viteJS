const Home = () => {
    return (
        <div className='main'>
            <div className='contents'>
                <h1>JOIN THE FIRST GLOBAL
                INDUSTRIAL MACHINERY
                ECOSYSTEM!</h1>
            </div>
            <div>
                <p className="text-xs px-36 mb-20">Become a part of the first global marketplace that covers your special needs within the machine and plant engineering industry and digitize your business.</p>
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