import { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAlllFavorites } from "../Utils/Index";

const CoffeeDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffe, setCoffee] = useState({})
    const [isFavorite , setIsFavorite] = useState(false)
    useEffect(() => {
        const singledata = data.find(coffe => coffe.id == id)
        setCoffee(singledata)
        const isExist = favorite.find(item => item.id == singledata.id)
        if(isExist){
            setIsFavorite(true)
        }
    }, [data, id])
    const {
        name, image, ingradients, nutrition_info, description, making_process, rating, popularity
    } = coffe
    const handleFavorite = (coffee) => {
        // addFavorite(coffee)
        getAlllFavorites()
    }
    return (
        <div>
            {coffe.description}
            <button disabled={isFavorite} onClick={() => handleFavorite(coffe)} className="btn btn-warning ml-16">Add Favorite</button>
        </div>
    );
};

export default CoffeeDetails;