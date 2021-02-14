import react, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour})=>{
    const [readMore, setReadMore] = useState(false);
    return(
        <div className='tour'>
            <div className='img-wrap'>
                <img className='img' src={image} alt={name} />
            </div>
            <div className='info'>
                <div className='top'>
                    <div className='header'>{name}</div>
                    <div className='price'>$ {price}</div>
                </div>
                <div className='bottom'>
                    <p>{readMore?info:`${info.substring(0,200)}...`}
                        <button className='btn-more' onClick={()=>setReadMore(!readMore)}>{readMore?`Show Less`:`Read More`}</button>
                    </p>
                </div>
                <div className='text-center'>
                    <button className='btn-remove' onClick={()=>removeTour(id)}>Not Interested</button>
                    </div>
            </div>
        </div>
    )
};

export default Tour;