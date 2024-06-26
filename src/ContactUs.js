// ContactUs.js
import { Link } from "react-router-dom";
import { useState } from "react";

const ContactUs = () => {
    // State for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the form data to your backend or perform any other action
        console.log("Form submitted:", { name, email, message });
        // Optionally, you can redirect the user to another page
        // window.location.href = "/";
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

            {/* Contact Us Form */}
            <section className="contact-us py-10">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="border rounded-md py-2 px-3 w-full h-32 resize-none"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Submit</button>
                        </form>
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
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;
