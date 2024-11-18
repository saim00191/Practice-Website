import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="p-16 h-24 flex justify-center md:justify-end">
      <ul className="flex items-center space-x-8">
        <li className={`${inter.className} text-xl font-medium cursor-pointer`}>
          Works
        </li>
        <li className={`${inter.className} text-xl font-medium cursor-pointer`}>
          Blog
        </li>
        <li className={`${inter.className} text-xl font-medium cursor-pointer`}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
