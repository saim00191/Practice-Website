import Image from "next/image";
import mainImage from '@/public/assets/main.png'
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full max-w-[1030px] my-4 md:my-[45px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
        <h2
          className={`${heebo.className} font-extrabold text-[28px] md:text-[40px] lg:text-[48px] leading-[40px] md:leading-[61px] text-[#21243d] mb-4`}
        >
          Hi, I am John,
          <br />
          Creative Technologist
        </h2>
        <p
          className={`${heebo.className} text-[14px] md:text-[16px] px-6 sm:px-12 md:px-0 md:text-start font-normal leading-[21px] md:leading-[23.5px] text-[#21243d] mb-4`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <button className="bg-[#f98585] shadow-xl shadow-black/30 w-[160px] md:w-[205px] h-[45px] md:h-[50px] rounded-sm text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[26.44px] text-white">
            Download Resume
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-[200px] h-[200px] md:w-[292px] md:h-[299px] relative mb-6 md:mb-0">
        <Image
          src={mainImage}
          alt="mainImage"
          className="rounded-full w-full h-full"
        />
        <div className="bg-[#dfd8d8] absolute top-2 right-2 w-full h-full rounded-full -z-10" />
      </div>
    </div>
  );
};

export default Hero;
