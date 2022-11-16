import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';


function App() {
  
  
  const [people, setPeople] = useState([])

  useEffect(()=>{
   const getpeople = () => {
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(res => console.log(res))
   }
   getpeople()
  },[])
  
  return (
    <Fragment>
      <Navbar brand="Library App"/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: "center"}}>Lista de personajes</h2>
              <BookList people={people}/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign: "center"}}>Lista de personajes</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
