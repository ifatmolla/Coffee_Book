import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
    const {name, image, category, origin, type, id, rating, popularity} = coffee || {}
    return (
        <div className="relative flex ">
          <Link to={`/coffee/${id}`} className=" transition hover:scale-105 shadow-xl rounded-xl overflow-hidden ">
            <figure className="w-full h-48 overflow-hidden">
            <img src={image} alt="" />
            </figure>
            <div className="p-4">
              <h1 className="text-xl ">Name: {name}</h1>
              <p>TYpe: {type}</p>
              <p>Origin: {origin}</p>
              <p>Rating: {rating}</p>
              <p>popular: {popularity}</p>
            </div>
          </Link>
        </div>
    );
};

export default Cards;