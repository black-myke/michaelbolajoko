"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";


export default function Contact() {

  const socialLinks = [
    { name: "X", url: "https://x.com/bolajoko_jnr", icon: "/twitter-x.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/michael-bolajoko", icon: "/linkedin.svg" },
    { name: "GitHub", url: "https://github.com/black-myke", icon: "/github.svg" },
  ]
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
  
    const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const response = await fetch("https://formspree.io/f/xjkyezpp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if(response.ok) {
          toast.success("Message Successfully Sent! I will get in touch with you shortly. Thanks!", { position: "top-center", autoClose: 5000 });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          toast.error("Hey, something went wrong. Please try again.", { position: "top-center", autoClose: 5000 });
        }
      }
      catch(error) {
        toast.error("Looks like your connection is down. Please turn on your internet and try again.", { position: "top-center", autoClose: 5000 });
      }
    }
  
    return (
      <>
      <ToastContainer />
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300">
              Have a project in mind or want to discuss a potential collaboration? Please reach out to me!
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-400">michaelbolajoko@gmail.com</p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
  
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Connect with me</h3>
                <div className="flex gap-4">
                {socialLinks.map(({ name, url, icon }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                      aria-label={`Visit my ${name} profile`}
                    >
                      <Image src={icon} alt={name} width={24} height={24} className="w-6 h-6 hover:opacity-80" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <form action="https://formspree.io/f/xjkyezpp" method="POST" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                  </div>
  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                  </div>
  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                  </div>
  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-70 transition-opacity flex items-center justify-center gap-2 hover:cursor-pointer"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }