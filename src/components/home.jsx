// import styles from '../App.css';

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.contents}>
                <h1>JOIN THE FIRST</h1>
                <h1>INDUSTRIAL MACHINERY</h1>
                <h1>ECOSYSTEM!</h1>
            </div>
            <div>
                <p>Become a part of the first global marketplace that covers your special needs within the machine and plant engineering industry and digitize your business.</p>
            </div>
            <video 
            src='./assets/video.mp4'
            autoPlay 
            muted 
            loop
            className={styles.video}
            />
        </div>
    )
}   

export default Home;