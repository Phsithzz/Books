//photo
import Navicon from '../assets/photos/Navicon.png'
import Navuser from '../assets/photos/Naruser.png'
//icons
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  return (
    <>
    
    <div className="p-4 flex justify-between items-center bg-[#839349] h-15 border-b-4 border-[#251c14]">
        <div className="flex gap-2  items-center">
            <img src={Navicon} alt="Bookicon" className="w-12 h-12"/>
            <h1 className="text-3xl font-semibold">Booktale</h1>
        </div>
        <div className="flex items-center">
            <div className="border-3 border-[#251c14] flex items-center h-10 rounded-3xl">
                <input type="text" placeholder='Search...' className="w-100 text-xl font-semibold placeholder:pl-2 outline-none "/>
                <FaSearch className="pr-2 w-8 h-8"/>
            </div> 
        </div>
        <div className="flex items-center gap-4">
            <TiShoppingCart className="w-8 h-8"/>
            <img src={Navuser} alt="User" className="w-10 h-10"/>
        </div>
   </div>
    </>
  )
}

export default Navbar