import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const CofffeeCards = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const {category} = useParams()
    const [coffees, setCoffees] = useState([]);
    useEffect (()=> {
      if(category){
        const filterByCategory = [...data].filter(coffee => coffee.category === category);
        setCoffees(filterByCategory); 
      }else{
        setCoffees(data.slice(0, 6))
      }
    }, [category, data]);
    console.log(category)
    console.log(data)
    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {
            coffees.map(coffee => (
                <Cards key={coffee.id} coffee={coffee}></Cards>
            ))
          } 
     </div>
     <button className="btn btn-warning" onClick={()=> navigate ('/coffes')}>View All</button>
       </>
    );
};

export default CofffeeCards;