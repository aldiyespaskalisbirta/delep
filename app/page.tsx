import Image from "next/image";
import { Engagement } from "next/font/google";
import { AiFillHeart } from "react-icons/ai";
import CountTime from "../components/count-time";
import CarouselSlider from "@/components/carousel";

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
    <main className="grid grid-cols-2">
      <div className="bg-pink-300 w-full h-screen px-8">
        <div className="m-8">
          <h1
            className={`${engagement.className} text-[6rem] text-white w-1/2 text-center`}
          >
            Iyes & Elep
          </h1>
          <div className="flex justify-center items-center gap-2 w-1/2">
            <span className="border-2  h-0 w-full border-white" />
            <div>
              <AiFillHeart size={32} className="text-white" />
            </div>
            <span className="border-2 h-0 w-full border-white" />
            <div></div>
            <div></div>
          </div>
          <p className="w-1/2 text-4xl leading-snug font-semibold text-white mt-10">
            {quote[0].quote.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="absolute z-50 w-full h-full">
          <CarouselSlider />
        </div>
        <CountTime />
      </div>
    </main>
  );
}
