import { FaChartLine, FaLaptopCode, FaBuilding } from "react-icons/fa";

export const Future = () => {
  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="min-h-screen w-full p-5 md:p-10 lg:p-20 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
          {/* Title */}
          <div className="text-center font-edu-vic text-4xl font-bold pt-10 text-white">
            My Future Plans
          </div>

          {/* Introduction */}
          <div className="text-lg text-gray-400 mt-8">
            <p>
              I am excited about the future and the opportunities it holds.
              Below, I have outlined the goals, skills, and projects I plan to
              pursue to continue growing both personally and professionally.
            </p>
          </div>

          {/* Goals and Skills Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goals */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaChartLine className="mr-2" /> Goals
              </h2>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  Short-Term Goal:{" "}
                  <span className="font-medium">
                    Complete a full-stack development bootcamp by the end of
                    this year.
                  </span>
                </li>
                <li>
                  Long-Term Goal:{" "}
                  <span className="font-medium">
                    Become a lead developer in a tech company within the next 5
                    years.
                  </span>
                </li>
                <li>
                  Personal Goal:{" "}
                  <span className="font-medium">
                    Contribute to open-source projects to give back to the
                    community.
                  </span>
                </li>
                <li>
                  5-Year Goal:{" "}
                  <span className="font-medium">
                    Start my own small online business, leveraging my skills in
                    web development and entrepreneurship.
                  </span>
                </li>
              </ul>
            </div>

            {/* Skills to Learn */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FaLaptopCode className="mr-2" /> Skills to Learn
              </h2>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  PHP and MySQL for building dynamic websites and managing
                  databases
                </li>
                <li>Python for backend development and data processing</li>
                <li>
                  Angular for building modern, responsive frontend applications
                </li>
                <li>
                  Node.js to enhance my skills in building scalable backend
                  services
                </li>
              </ul>
            </div>
          </div>

          {/* Upcoming Projects Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <FaBuilding className="mr-2" /> Upcoming Projects
            </h2>

            {/* Projects in a Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">
                  Offline Finance Management Website
                </h3>
                <p className="text-gray-400 mt-2">
                  This project will allow users to manage their personal
                  finances offline. The system will automate tasks like loan
                  payments and fund transfers based on user-defined rules.
                </p>
                <a
                  href="https://github.com/Shazil0204/offline-finance-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-4 block"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">
                  Construction Management Website
                </h3>
                <p className="text-gray-400 mt-2">
                  This project aims to create a platform where managers can
                  assign tasks with different priorities to individual workers
                  or groups, improving communication and task management.
                </p>
                <a
                  href="https://github.com/Shazil0204/construction-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-4 block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-10">
            <p className="text-gray-400 italic text-center">
              "The future belongs to those who believe in the beauty of their
              dreams." - Eleanor Roosevelt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
