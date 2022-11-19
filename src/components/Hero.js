// import HeroImage from '../image/hero-img.png'


export default function Hero() {
    return (
        <div className='hero container'>
            <div className='hero-img-container'>
            <img src={require('../image/hero-img.png')} alt='hero' />
            </div>
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
