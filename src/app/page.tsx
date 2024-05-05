import Image from "next/image";
import start3 from "../assets/star2.svg";
import weather from "../assets/weather.png";
import bookacall from "../assets/bookign cll.png";
import demo from "../assets/Rectangle 15.png";

export default function Home() {
  return (
    <main className="relative min-h-screen h-auto">
      <div className="absolute -top-[14rem] -right-[6rem] -z-10">
        <Image src={start3} alt="star" width={400} height={400} />
      </div>
      <div className="">
        <h2>
          I&#39;m a{" "}
          <span className="text-darkGold capitalize">Problem solver</span>, a{" "}
          <span className="text-darkGold capitalize">Business men</span>, and a
          <br />
          <span className="text-darkGold capitalize">Developer</span>
          . I&#39;m here to help you
          <br /> <span className="text-darkGold capitalize">Build</span>,
          <span className="text-darkGold capitalize">Earn</span>, and{" "}
          <span className="text-darkGold capitalize">Dominate </span>
        </h2>
        <div className="w-[550px]  bg-[#090F1A] rounded-[30px] bg-blend-normal p-5 grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-7 relative ">
            <Image src={weather} alt="weather" fill />
          </div>
          <div className="col-span-5 p-2 bg-[#222731]/50 rounded-[15px]">
            <p className="text-[12px]">
              Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.
            </p>
          </div>
          <div className="col-span-5 relative">
            <Image src={bookacall} alt="weather" width={185} height={66} />
          </div>
          <div className="col-span-7 relative">
            <Image src={demo} alt="weather" fill />
          </div>
        </div>
        <div className=" absolute top-16 right-0 w-[630px] h-[360px] bg-[#090F1A] rounded-[30px]  bg-blend-multiply">
          continue...
        </div>
      </div>
    </main>
  );
}
