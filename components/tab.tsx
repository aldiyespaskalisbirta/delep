import Link from "next/link";
import { Card } from "./ui/card";

import { ImYoutube } from "react-icons/im";
import { GiWhiteBook } from "react-icons/gi";
import { HiLibrary } from "react-icons/hi";
import { BiMoviePlay } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";

function Tab() {
  return (
    <div className="z-50 flex gap-4 lg:gap-5">
      <Link
        href="https://www.youtube.com/"
        className="flex flex-col items-center justify-center"
      >
        <Card className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:scale-105 transition transform">
          <ImYoutube size={40} className="text-red-500" />
        </Card>
        <span className="text-white mt-2">YouTube</span>
      </Link>
      <Link
        href="https://belajar.usd.ac.id/login/index.php"
        className="flex flex-col items-center justify-center"
      >
        <Card className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:scale-105 transition transform">
          <HiLibrary size={40} className="text-pink-300" />
        </Card>
        <span className="text-white mt-2">LMS</span>
      </Link>
      <Link
        href="https://scholar.google.com/"
        className="flex flex-col items-center justify-center"
      >
        <Card className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:scale-105 transition transform">
          <GiWhiteBook size={40} className="text-green-400" />
        </Card>
        <span className="text-white mt-2">Scholar</span>
      </Link>
      <Link
        href="https://tv2.idlixplus.net/"
        className="flex flex-col items-center justify-center"
      >
        <Card className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:scale-105 transition transform">
          <BiMoviePlay size={40} className="text-gray-800" />
        </Card>
        <span className="text-white mt-2">Movie</span>
      </Link>
      <Link
        href="https://www.bilibili.tv/id/anime"
        className="flex flex-col items-center justify-center"
      >
        <Card className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:scale-105 transition transform">
          <BsRobot size={40} className="text-cyan-400" />
        </Card>
        <span className="text-white mt-2">Anime</span>
      </Link>
    </div>
  );
}

export default Tab;
