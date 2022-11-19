export default function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = 'Sold out'
    }
    else if ((props.item.location).toLowerCase() === 'online') {
        badgeText = 'online'
    }

    return (

            <div className='card'>

                <div className='bg-img'>
                    <img src={props.item.coverImg} alt='activity' />
                { badgeText && <p className='activity-status'>{badgeText}</p>}
                </div>

                <div className='activity-detail'>
                    <i className="fa-solid fa-star"></i>{props.item.stats.rating}<span className='light'> ({props.item.stats.reviewCount}) {props.item.location}</span>
                    <p>{props.item.title}</p>
                    <p><span className="bold">From ${props.item.price}</span> / person</p>
                </div> 

            </div>
        
    )
}