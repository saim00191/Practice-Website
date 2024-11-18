import Post from "./RecentPostCard";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export default function RecentPostsPage() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="w-full bg-[#f4e2e2] p-4 sm:p-6">
      <div className="max-w-[1030px] mx-auto md:h-auto py-8">
        <div className="flex items-center justify-between mb-4 md:px-8">
          <h2
            className={`${heebo.className} text-lg sm:text-xl md:text-2xl font-medium leading-tight text-black`}
          >
            Recent Posts
          </h2>
          <p
            className={`${heebo.className} text-lg sm:text-xl md:text-2xl font-medium leading-tight text-[#f98585] cursor-pointer hover:underline`}
          >
            View all
          </p>
        </div>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 md:px-5">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
