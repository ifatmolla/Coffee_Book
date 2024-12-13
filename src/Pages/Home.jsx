import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* heading  */}
            <Heading title={'Browse Coffees by Category'} subtitle={'choose your choose yourchoose yourchoose yourchoose yourchoose yourchoose yourchoose yourchoose yourchoose your '}></Heading>
            {/* category tab section */}
          <Categories categories={categories}></Categories>
            {/* dynamic nested cpmponents  */}
           <Outlet></Outlet>
        </div>
    );
};

export default Home;