import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const icons = [
  {
    icon: FaFacebookSquare,
    href: "https://www.facebook.com/share/vqF8MsffpzqYwQYD/?mibextid=LQQJ4d",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/amjad_saim_9?igsh=MWVhdW16OXA3eDkyZA%3D%3D&utm_source=qr",
  },
  { icon: FaTwitter, href: "/" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/saim-raza-b7a7172b6/",
  },
];

const Footer = () => {
  return (
    <footer className="h-[243px] bg-[#faf5f5] space-y-6 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-wrap justify-center space-x-5">
        {icons.map((icon, index) => (
          <Link key={index} href={icon.href} target="_blank">
            <icon.icon className="w-[30px] h-[30px] text-[#21243d]  transition-colors duration-300" />
          </Link>
        ))}
      </div>
      <p
        className={`${heebo.className} text-[18px] sm:text-[20px] md:text-[22px] font-medium text-center`}
      >
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
