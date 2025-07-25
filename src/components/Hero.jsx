//photo
import profile from "../assets/photos/Profile.png";
//icons
import { BsShareFill } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { LuSend } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { LuPaperclip } from "react-icons/lu";
import { LuCircleDollarSign } from "react-icons/lu";
const Hero = () => {
  return (
    <>
      <div className="p-12">
        <div className="flex gap-6 justify-between ">
          <div className="flex gap-18 items-center w-2/4 p-2 border-r-3">
            <img src={profile} alt="UserProfile" className="w-40 h-40" />
            <div className="flex flex-col  w-full space-y-2">
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-3xl">Olivia Nadal</p>
                <div className="flex gap-2 ">
                  <BsShareFill className="text-[#251c14]  text-xl" />
                  <CiMenuKebab className="text-[#251c14]  text-xl" />
                </div>
              </div>
              <p className="text-xl">@olivia.nadal</p>
              <p className="text-xl">From Netherlands</p>
              <div className="flex gap-4 ">
                <div className="bg-[#251c14] flex items-center justify-center gap-2  px-4 py-2   rounded-lg ">
                  <TiTick className="text-white" />
                  <button type="button" className="text-white">
                    Followed
                  </button>
                </div>
                <div className="border-3 flex gap-2 items-center justify-center rounded-lg px-4 py-2">
                  <LuSend />
                  <button type="button" className="">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  w-2/4 px-10">
            <div className="flex flex-col  space-y-8 w-full ">
              <div className="flex gap-20 p-2 ">
                <div className="flex flex-col space-y-6">
                  <div className="flex gap-2 items-center">
                    <CiUser className="text-xl" />
                    <p className="text-xl">Followers: &nbsp;&nbsp;2.3k</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaBook className="text-xl" />
                    <p className="text-xl">Books: &nbsp;&nbsp;23</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="flex gap-2 items-center">
                    <RiUserFollowLine className="text-xl" />
                    <p className="text-xl">Joined: &nbsp;&nbsp;2 years ago</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <SiBookstack className="text-xl" />
                    <p className="text-xl">Series: &nbsp;&nbsp;5</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center gap-2 border-3 rounded-lg px-4 py-2">
                    <LuPaperclip className="text-xl"/>
                    <button type="button">
                      Other social media of this author
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-3 rounded-lg px-4 py-2">
                    <LuCircleDollarSign className="text-xl"/>
                    <button type="button">Donate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
