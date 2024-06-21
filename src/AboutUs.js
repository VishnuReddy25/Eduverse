// AboutUs.js
import { Link } from "react-router-dom";

const AboutUs = () => {
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

            {/* About Us Content */}
            <section className="about-us py-10">
                <div className="container mx-auto">
                    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg">At EduVerse, we are committed to providing high-quality online education to learners worldwide. Our mission is to empower individuals with knowledge and skills that will help them succeed in their personal and professional lives.</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Footer */}
            <footer className="bg-gray-800 text-white py-12 text-center mt-20">
                <div className="container mx-auto">
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

export default AboutUs;
