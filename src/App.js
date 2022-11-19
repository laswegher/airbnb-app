import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {

    const cardHtml = data.map(element => {
                
        return (
            < Card
            key = {element.id}
            item = {element}
                
        /> )
    })

    return (
        <>
            <Header />
            <Hero />
            <div className='card-container container'>
                {cardHtml}
            </div>
        </>
    )
}