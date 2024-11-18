import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

interface Props {
  title: string;
  date: string;
  category: string;
  description: string;
}

const Post = ({ title, date, category, description }: Props) => (
  <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 hover:shadow-lg transition-shadow duration-300">
    <div className="p-6 flex flex-col justify-evenly h-[286px]">
      <h2
        className={`${heebo.className} font-bold text-2xl text-center md:text-left md:text-[30px] leading-[38px] text-black mb-4`}
      >
        {title}
      </h2>
      <div className="flex flex-wrap items-center justify-center md:justify-start text-sm sm:text-base text-black/70 mb-4">
        <p className={`${heebo.className} font-normal`}>{date}</p>
        <span className="mx-2">|</span>
        <p className={`${heebo.className} font-normal`}>{category}</p>
      </div>
      <p
        className={`${heebo.className} text-sm sm:text-base leading-relaxed text-center md:text-left font-normal text-black/80`}
      >
        {description}
      </p>
    </div>
  </div>
);

export default Post;
