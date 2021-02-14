import react from 'react';
import Tour from './tour';

const Tours = ({tours, removeTour})=>{
    return(
        <div className='tours-wrap'>
            {tours.map((tour)=> {
                return(
                    <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                )
            })}
        </div>
    );
};

export default Tours;