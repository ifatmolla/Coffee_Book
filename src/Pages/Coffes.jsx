import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/Cards';
import { useState } from 'react';

const Coffes = () => {
    const data = useLoaderData()
    const [coffees, setCoffees]= useState(data)
    const handleSort = sortBy => {
      if (sortBy == 'popularity'){
      // sort by popularity
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
      setCoffees(sorted)
      }else if (sortBy == 'rating'){
        // sort by rating

        const sorted = [...data].sort((a, b) => a.rating - b.rating)
        setCoffees(sorted)
      }
    }
    return (
       <>
      <div className="flex justify-between my-12 items-center">
      <div>
        <h1 className='text-3xl font-thin'>Sort Coffee & apos; s by popularity & gt</h1>
      </div>
      <div className='space-x-4'>
      <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort By popular</button>
      <button onClick={() => handleSort('rating')} className='btn btn-warning'>Sort By Rating</button>
      </div>
    
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {
            coffees.map(coffee => (
                <Cards key={coffee.id} coffee={coffee}></Cards>
            ))
          } 
     </div>
       </>

    );
};

export default Coffes;