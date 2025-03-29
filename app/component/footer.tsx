import { Stylish } from "next/font/google";
import Link from "next/link";
import { Mountain, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";


const stylish = Stylish ({weight: ['400'], style: ["normal"],  variable: '--font-stylish'});

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="py-10 bg-gray-900 border-t border-gray-800">
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
                
                {["github", "twitter", "linkedin", "dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label={`Visit my ${social} profile`}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-sm" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-500">&copy; {currentYear}</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }