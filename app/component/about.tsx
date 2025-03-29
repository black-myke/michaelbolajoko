import Image from "next/image"

export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-md" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-900">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="John Doe"
                    width={320}
                    height={320}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Who Am I?
              </h2>
              <p className="text-gray-300 mb-4">
                Hello! I'm Michael, a passionate Frontend Web developer with experience in building modern web applications.
                I take pride in creating responsive, user-friendly interfaces that deliver exceptional user experiences. 
              </p>
              <p className="text-gray-300 mb-6">
                I bring a unique blend of technical expertise and strategic insight to every project. I thrive in collaborative 
                environments, working closely with clients and fellow developers to create engaging, innovative and intuitive 
                web experiences. My passion lies in designing clean, responsive interfaces that combine aesthetic appeal with 
                seamless functionality as well as SEO. I am committed to delivering solutions that meet your needs and 
                exceed expectations, ensuring your web presence stands out in today's competitive landscape. <br />
                Passionate about technology, music, movies, climate, animals and lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-medium mb-2">Name:</h3>
                  <p className="text-gray-400">Michael Bolajoko</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Email:</h3>
                  <p className="text-gray-400">michaelbolajoko@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Location:</h3>
                  <p className="text-gray-400">Lagos, Nigeria</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Availability:</h3>
                  <p className="text-gray-400">Freelance & Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }