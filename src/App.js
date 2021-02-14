// import logo from './logo.svg';
import ReactCSSTransitionGroup from 'react-transition-group';
import react, {useState, useEffect} from 'react'
import './App.css';
import Tours from './tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  const removeTour = (id)=>{
    // for(let i=0; i<tours.length; i++){
    //   if(tours[i].id === id){
    //     tours[i].style.animationPlayState = 'running';
    //     tours[i].addEventListener('animationend', ()=>{
    //       const newTours = tours.filter((tour)=> tour.id !== id);
    //       setTours(newTours);
    //     })
    //   } 
    // }
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  };

  useEffect(()=>{
    fetchTours();
    }, []
  );


  if(loading){
    return(
      <div className='title'>
        <h2>Loading...</h2>
      </div>
    );
  };

  
  if(tours.length === 0){
    return(
      <section className='title'>
        <h1>No Tours Left</h1>
        <button className='btn-refresh' onClick={()=>fetchTours()}>Refresh</button>
      </section>
    );
  };


  return (
    <div className='container'>
      <div className='row'>
        <div className='title'>
          <h1>Tours Advisor</h1>
        </div>
      </div>
      <div className='row'>
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    </div>
    
  );
}

export default App;
