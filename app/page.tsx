import { Engagement } from "next/font/google";

import { AiFillHeart } from "react-icons/ai";

import CountTime from "@/components/count-time";
import CarouselSlider from "@/components/carousel";
import Search from "@/components/search";
import Tab from "@/components/tab";

const engagement = Engagement({ weight: ["400"], preload: false });

const api_key = process.env.NINJAS_API_KEY!;
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": api_key,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=love";

const getQuote = async () => {
  const res = await fetch(apiURL, options);
  const data = await res.json();
  return data;
};
export default async function Home() {
  const quote = await getQuote();

  return (
    <main className="grid md:grid-cols-2">
      <div className="bg-pink-300 w-full max-h-screen lg:px-8 overflow-hidden">
        <div className="relative m-8 flex flex-col h-screen items-center justify-center">
          <div className="absolute flex flex-col items-center justify-center top-3 lg:mx-2 w-full">
            <h1
              className={`${engagement.className} text-[4rem] lg:text-[6rem] text-white text-center`}
            >
              Iyes & Elep
            </h1>
            <div className="flex justify-center items-center gap-2 w-full lg:w-1/2">
              <span className="border-2  h-0 w-full border-white" />
              <div>
                <AiFillHeart size={50} className="text-white" />
              </div>
              <span className="border-2 h-0 w-full border-white" />
            </div>
          </div>
          <div>
            <p className="text-center text-2xl lg:text-4xl leading-snug font-semibold text-white">
              {quote[0].quote.toUpperCase()}
            </p>
          </div>
          <div className="absolute bottom-14 w-full flex items-center justify-center">
            <span className="text-2xl lg:text-4xl text-white mt-8">
              September 26, 2022
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="absolute z-30 w-full h-full">
          <CarouselSlider />
        </div>
        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full">
          <CountTime />
          <Search />
          <Tab />
        </div>
      </div>
    </main>
  );
}
