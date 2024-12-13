import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
               <Toaster />
            {/* navbar */}
           <div className="h-16">
           <Navbar></Navbar>
           </div>

            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
                <Outlet></Outlet>
                </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;