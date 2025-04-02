import { Stylish } from "next/font/google";
import Link from "next/link";
import { Mountain, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";


const stylish = Stylish ({weight: ['400'], style: ["normal"],  variable: '--font-stylish'});

export default function Footer() {
  const socialLinks = [
    { name: "X", url: "https://x.com/bolajoko_jnr", icon: "/twitter-x.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/michael-bolajoko", icon: "/linkedin.svg" },
    { name: "GitHub", url: "https://github.com/black-myke", icon: "/github.svg" },
  ]
    const currentYear = new Date().getFullYear();

    return (
      <footer className="pt-10 pb-5 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className={`${stylish.className} italic flex items-center text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent`}
              >
                <Mountain className={` mr-2 h-6 w-6`} />
                michaelbolajoko
              </Link>
              <p className="mt-2 text-sm text-gray-400">Building beautiful web experiences</p>
            </div>
  
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
               {socialLinks.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label={`Visit my ${name} profile`}
                  >
                    <Image src={icon} alt={name} width={20} height={20} className="w-4 h-4 hover:opacity-80" />
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        <p className=" text-lg text-center text-gray-500 mb-0">&copy; {currentYear}</p>
      </footer>
    )
  }