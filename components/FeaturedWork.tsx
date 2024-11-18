import Img1 from "@/public/assets/Img1.png";
import Img2 from "@/public/assets/Img2.png";
import Img3 from "@/public/assets/Img3.png";
import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const FeatureWork = () => {
  const works = [
    {
      img: Img1,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
    },
    {
      img: Img2,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
    },
    {
      img: Img3,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
    },
  ];

  return (
    <div className="max-w-[1030px] mx-auto my-[20px] px-4">
      <h2
        className={`${heebo.className} text-[22px] font-medium text-black py-8 text-center md:text-left`}
      >
        Featured Work
      </h2>
      <div className="space-y-16">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center"
          >
            <Image
              src={work.img}
              alt={work.title}
              className="w-[246px] h-[180px] rounded-2xl"
            />
            <div className="flex flex-col text-center md:text-left">
              <h3 className={`${heebo.className} text-[30px] font-bold`}>
                {work.title}
              </h3>
              <div className="flex justify-center md:justify-start gap-x-4 mt-3">
                <p className="bg-[#f98585] text-white text-[18px] rounded-full h-[24px] flex items-center justify-center w-[68px]">
                  {work.year}
                </p>
                <p className="text-[20px] font-normal text-black/60">
                  {work.category}
                </p>
              </div>
              <p
                className={`${heebo.className} text-[18px] mt-3 w-full md:pr-16`}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureWork;
