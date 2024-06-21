import { Link } from "react-router-dom";
import { useState } from "react"; // Added import for useState

const Courses = () => {
    // State to track selected branch
    const [selectedBranch, setSelectedBranch] = useState("ece");

    // Data for courses
    const coursesData = {
        ece: [
            {
                id: 1,
                name: "Digital Signal Processing",
                description: "An introductory course covering basic concepts of digital signal processing.",
                image: "signalprocessing.jpeg",
                detailsLink: "dsp_course_details.html"
            },
            {
                id: 2,
                name: "VLSI Design",
                description: "A comprehensive study of Very Large Scale Integration (VLSI) design principles.",
                image: "vlsi.jpeg",
                detailsLink: "vlsi_course_details.html"
            },
            {
                id: 3,
                name: "Embedded Systems",
                description: "Exploration of embedded systems design and programming for real-time applications.",
                image: "embeded.jpg",
                detailsLink: "embedded_systems_course_details.html"
            }
        ],
        eee: [
            {
                id: 1,
                name: "Power Systems Analysis",
                description: "Analysis of electrical power systems, including load flow studies and fault analysis.",
                image: "PSA.png",
                detailsLink: "power_systems_course_details.html"
            },
            {
                id: 2,
                name: "Renewable Energy Systems",
                description: "Study of renewable energy sources such as solar, wind, and hydroelectric power.",
                image: "RenewableEnergy.jpeg",
                detailsLink: "renewable_energy_course_details.html"
            },
            {
                id: 3,
                name: "Electric Drives",
                description: "Fundamentals of electric drives and control techniques for various applications.",
                image: "electricdrives.jpeg",
                detailsLink: "electric_drives_course_details.html"
            }
        ],
        mech: [
            {
                id: 1,
                name: "Finite Element Analysis",
                description: "Introduction to finite element analysis techniques for structural and thermal analysis.",
                image: "finiteelement.jpeg",
                detailsLink: "fea_course_details.html"
            },
            {
                id: 2,
                name: "Robotics and Automation",
                description: "Exploration of robotics and automation technologies, including kinematics and dynamics.",
                image: "RA.jpeg",
                detailsLink: "robotics_course_details.html"
            },
            {
                id: 3,
                name: "Automotive Engineering",
                description: "Study of automotive systems and technologies, including vehicle dynamics and powertrains.",
                image: "automotive.jpeg",
                detailsLink: "automotive_engineering_course_details.html"
            }
        ],
        civil: [
            {
                id: 1,
                name: "Structural Engineering",
                description: "Fundamentals of structural engineering, including analysis and design of structures.",
                image: "structuralengineer.png",
                detailsLink: "structural_engineering_course_details.html"
            },
            {
                id: 2,
                name: "Transportation Engineering",
                description: "Study of transportation systems and infrastructure, including planning and design.",
                image: "transportationengineer.jpeg",
                detailsLink: "transportation_engineering_course_details.html"
            },
            {
                id: 3,
                name: "Environmental Engineering",
                description: "Introduction to environmental engineering principles and practices for sustainable development.",
                image: "environmental-engineering.jpg",
                detailsLink: "environmental_engineering_course_details.html"
            }
        ],
        cse: [
            {
                id: 1,
                name: "Introduction to Algorithms",
                description: "Basic algorithms and data structures for solving computational problems efficiently.",
                image: "algorithm.jpeg",
                detailsLink: "algorithms_course_details.html"
            },
            {
                id: 2,
                name: "Artificial Intelligence",
                description: "Fundamentals of artificial intelligence, including machine learning and neural networks.",
                image: "AI.jpeg",
                detailsLink: "ai_course_details.html"
            },
            {
                id: 3,
                name: "Web Development",
                description: "Basic concepts and technologies for developing web applications.",
                image: "webdev.jpeg",
                detailsLink: "webdev_course_details.html"
            }
        ],
        it: [
            {
                id: 1,
                name: "Database Management Systems",
                description: "Introduction to database systems, including data modeling and query languages.",
                image: "dbms.jpeg",
                detailsLink: "dbms_course_details.html"
            },
            {
                id: 2,
                name: "Web Development",
                description: "Basic concepts and technologies for developing web applications.",
                image: "webdev.jpeg",
                detailsLink: "webdev_course_details.html"
            },
            {
                id: 3,
                name: "Cybersecurity",
                description: "Study of cybersecurity principles and techniques for protecting computer systems and networks.",
                image: "cyber.jpeg",
                detailsLink: "cybersecurity_course_details.html"
            }
        ]
    };
    
    

    // Function to handle branch selection
    const handleBranchSelect = (branch) => {
        setSelectedBranch(branch);
    };

    return (
        <div className="font-sans antialiased bg-gray-100">
            {/* Navigation Bar */}
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <Link to="/" className="text-2xl font-bold">EduVerse</Link>
                    <nav>
                        <ul className="flex">
                            <li><Link to="/home" className="text-lg text-white px-3 py-2">Home</Link></li>
                            <li><Link to="/courses" className="text-lg text-white px-3 py-2">Courses</Link></li>
                            <li><Link to="/about" className="text-lg text-white px-3 py-2">About Us</Link></li>
                            <li><Link to="/contact" className="text-lg text-white px-3 py-2">Contact Us</Link></li>
                            <li><Link to="/login" className="text-lg text-white px-3 py-2">Login</Link></li>
                            <li><Link to="/signup" className="text-lg text-white px-3 py-2">Sign Up</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Branch Selection */}
            
            <section className="branches py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Select Branch</h2>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => handleBranchSelect("ece")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "ece" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>ECE</button>
                        <button onClick={() => handleBranchSelect("eee")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "eee" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>EEE</button>
                        <button onClick={() => handleBranchSelect("it")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "it" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>IT</button>
                        <button onClick={() => handleBranchSelect("cse")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "cse" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>CSE</button>
                        <button onClick={() => handleBranchSelect("civil")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "civil" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>Civil</button>
                        <button onClick={() => handleBranchSelect("mech")} className={`branch-btn focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ${selectedBranch === "mech" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`}>Mechanical</button>
            
                        {/* Add buttons for other branches (mech, civil, cse, it) */}
                    </div>
                </div>
            </section>


            {/* Courses Section */}
            <section className="courses py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coursesData[selectedBranch].map(course => (
                            <div key={course.id} className="course bg-white rounded-lg shadow-md p-6">
                                <img src={`images/${course.image}`} alt={course.name} className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
                                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                                <p className="text-gray-700 mb-4">{course.description}</p>
                                <a href={course.detailsLink} className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">View Details</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Footer */}
            <footer className="bg-gray-800 text-white py-12 text-center mt-20">
                <div className="container mx-auto">
                    <section className="about-us mb-8">
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p className="text-lg">At EduVerse, we are committed to providing high-quality online education to learners worldwide. Our mission is to empower individuals with knowledge and skills that will help them succeed in their personal and professional lives.</p>
                    </section>
                    <section className="contact-us">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <div className="flex justify-center">
                            <div className="text-left mr-12">
                                <p className="mb-2"><i className="fas fa-envelope"></i> Email: info@eduverse.com</p>
                                <p className="mb-2"><i className="fas fa-phone"></i> Phone: +1 (123) 456-7890</p>
                                <p><i className="fas fa-map-marker-alt"></i> Address: 123 Education Street, Cityville, State, Zip Code</p>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default Courses;
