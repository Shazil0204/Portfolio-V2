import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="min-h-screen w-full p-5 md:p-10 lg:p-20 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
          {/* Title */}
          <div className="text-center font-edu-vic text-4xl font-bold pt-10 text-white">
            Contact Me
          </div>
          {/* Introduction */}
          <div className="text-lg text-gray-400 mt-8 text-center">
            <p>
              I would love to connect with you! Feel free to reach out through
              any of the following platforms.
            </p>
          </div>
          {/* Contact Information */}
          <div className="mt-10 space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-blue-400" />
              <span className="text-xl text-gray-300">
                Email:{" "}
                <a
                  href="mailto:20shiz04@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  20shiz04@gmail.com
                </a>
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-green-400" />
              <span className="text-xl text-gray-300">
                Phone:{" "}
                <a
                  href="tel:+45 50 12 52 23"
                  className="text-green-400 hover:underline"
                >
                  +45 50 12 52 23
                </a>
              </span>
            </div>
            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <FaGithub className="text-2xl text-gray-400" />
              <span className="text-xl text-gray-300">
                GitHub:{" "}
                <a
                  href="https://github.com/Shazil0204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  github.com/Shazil0204
                </a>
              </span>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-2xl text-blue-500" />
              <span className="text-xl text-gray-300">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/shazil-shahid-6443202a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  shazil shahid Linkedin
                </a>
              </span>
            </div>
          </div>
          {/* Conclusion */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 italic">
              Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
