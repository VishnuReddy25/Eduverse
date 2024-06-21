import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    // State to store user credentials
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically send the credentials to a backend server for authentication
        // For demonstration, let's just validate the credentials locally
        if (username === "user" && password === "password") {
            // If credentials are correct, redirect to home page or any other desired page
            window.location.href = "/home";
        } else {
            // If credentials are incorrect, display an error message
            setError("Invalid username or password. Please try again.");
        }
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

            {/* Login Form */}
            <section className="login py-10">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="py-4 px-6">
                            <h2 className="text-3xl font-bold mb-4">Login</h2>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-md py-2 px-3 w-full" />
                                </div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Login</button>
                            </form>
                        </div>
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

export default Login;
