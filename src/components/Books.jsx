//icons
import { FiFilter } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { ImSortAmountDesc } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
//photo
import Navicon from "../assets/photos/Navicon.png";
import book from "../assets/photos/book.jpg";
const Body = () => {
  return (
    <>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-2 space-y-2 w-fit border-r-3 pr-4">
          <div className="flex items-center gap-2 border-b-2 w-30   ">
            <FiFilter className="text-lg" />
            <p className="text-lg font-semibold">Filter</p>
          </div>
          <div className="flex flex-col space-y-4">
            <aside>
              <p className="text-lg font-semibold">Categories</p>
              <div className="pl-2">
                <ul>
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      name="All"
                      className="appearance-none h-5 w-5 border-3 border-[#251c14] rounded-lg  checked:bg-[#251c14] "
                    />
                    <label htmlFor="All" className="   font-semibold">
                      All
                    </label>
                  </li>
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Programming"
                      className="appearance-none h-5 w-5 border-3 border-[#251c14] rounded-lg  checked:bg-[#251c14] "
                    />
                    <label htmlFor="Programming" className="font-semibold">
                      Programming
                    </label>
                  </li>
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Manga"
                      className="appearance-none h-5 w-5 border-3 border-[#251c14] rounded-lg  checked:bg-[#251c14] "
                    />
                    <label htmlFor="Manga" className="font-semibold">
                      Manga
                    </label>
                  </li>
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Self-Development"
                      className="appearance-none h-5 w-5 border-3 border-[#251c14] rounded-lg  checked:bg-[#251c14] "
                    />
                    <label htmlFor="Self-Development" className="font-semibold">
                      Self-Development
                    </label>
                  </li>
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      name="Novel"
                      className="appearance-none h-5 w-5 border-3 border-[#251c14] rounded-lg  checked:bg-[#251c14] "
                    />
                    <label htmlFor="Novel " className="font-semibold">
                      Novel
                    </label>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Price</label>
              <input
                type="range"
                min="99"
                max="9999"
                className="w-50 text-[#251c14]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Rating</label>
              <div className="flex gap-2">
                <MdOutlineStar className="text-[#839349] text-lg" />
                <MdOutlineStar className="text-[#839349] text-lg" />
                <MdOutlineStar className="text-[#839349] text-lg" />
                <MdOutlineStar className="text-[#839349] text-lg" />
                <MdOutlineStar className="text-[#839349] text-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <div className="flex flex-col pl-6">
            <div className="flex items-center gap-4">
              <img src={Navicon} alt="Books" className="w-14" />
              <h1 className="text-3xl font-semibold">Olivia Nadal's books</h1>
              <div className="pl-10">
                <div className="border-3 border-[#251c14] flex items-center h-10 rounded-3xl bg-[#C9B194] ">
                  <input
                    type="text"
                    placeholder="Search in this author"
                    className="w-100 text-xl font-semibold placeholder:pl-2 outline-none "
                  />
                  <FaSearch className="pr-2 w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="flex justify-between pl-18 pr-18">
              <h1 className="text-3xl  font-semibold">Top Selling</h1>
              <div className="flex gap-2 items-center ">
                <p className="text-lg">Sort By</p>
                <ImSortAmountDesc className="text-lg" />
              </div>
            </div>

            <div className="grid grid-cols-5 p-14 ">
              <div className="flex flex-col">
                <img src={book} alt="Book" className="h-40 w-30" />
                <p className="text-xs">Manga</p>
                <p className="text-xl">Book1 Name</p>
              </div>
              <div className="flex flex-col">
                <img src={book} alt="Book" className="h-40 w-30" />
                <p className="text-xs">Manga</p>
                <p className="text-xl">Book2 Name</p>
              </div>
              <div className="flex flex-col">
                <img src={book} alt="Book" className="h-40 w-30" />
                <p className="text-xs">Manga</p>
                <p className="text-xl">Book3 Name</p>
              </div>
              <div className="flex flex-col">
                <img src={book} alt="Book" className="h-40 w-30" />
                <p className="text-xs">Manga</p>
                <p className="text-xl">Book4 Name</p>
              </div>
              <div className="flex flex-col">
                <img src={book} alt="Book" className="h-40 w-30" />
                <p className="text-xs">Manga</p>
                <p className="text-xl">Book5 Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
