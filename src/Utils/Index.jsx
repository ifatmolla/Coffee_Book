import toast from "react-hot-toast"

// get all coffee from local storage
 const getAlllFavorites = () => {
    const all = localStorage.getItem('favorite')
   
    if(all){
        const favorite = JSON.parse(all)
        console.log(favorite)
        return favorite
    }else{
        console.log([])
       return []
    }
 }

// add a coffee to local storage
const addFavorite = coffee => {
    const favorite = getAlllFavorites()
    const isExist = favorite.find(item => item.id == coffee.id)
    if(isExist) return toast.error('Coffee Allrady exists !');
    console.log(favorite)
    favorite.push(coffee)
    localStorage.setItem ('favorite', JSON.stringify(favorite))
    toast.success('Successfully added!');
}

// remove a coffee from local storage


export {addFavorite, getAlllFavorites}