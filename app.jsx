// App.js
import React from 'react';

function App() {
  return (
    <div className="font-sans antialiased bg-gray-100">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-2xl font-bold">EduVerse</a>
          <nav>
            <ul className="flex">
              <li><a href="#" className="text-lg text-white px-3 py-2">Home</a></li>
              <li><a href="#" className="text-lg text-white px-3 py-2">Courses</a></li>
              <li><a href="#" className="text-lg text-white px-3 py-2">About Us</a></li>
              <li><a href="#" className="text-lg text-white px-3 py-2">Contact Us</a></li>
              <li><a href="#" className="text-lg text-white px-3 py-2">Login</a></li>
              <li><a href="#" className="text-lg text-white px-3 py-2">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-blue-500 text-white py-20 text-center">
          <div className="container mx-auto">
            <img src="eduverse.jpeg" alt="EduVerse Logo" className="mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <h1 className="text-4xl font-bold mb-4">Welcome to EduVerse</h1>
            <p className="text-lg mb-8">Your ultimate destination for online learning.</p>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-400 py-3 px-6 rounded-lg text-lg font-bold inline-block transition duration-300">Sign Up Now</a>
          </div>
        </section>
        <section className="bg-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key Features</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <h3 className="text-xl font-bold mb-4">Flexible E-Learning</h3>
                <p>Learn at your own pace, anytime, anywhere.</p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
                <p>Engage with industry professionals and experienced educators.</p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <h3 className="text-xl font-bold mb-4">Interactive Courses</h3>
                <p>Experience hands-on learning through interactive courses.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Popular Courses</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./course-1.jpeg" alt="Course 1" className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
                  <h3 className="text-xl font-bold mb-2">Introduction to Programming</h3>
                  <p className="text-gray-700 mb-4">An introductory course covering basic programming concepts.</p>
                  <a href="#" className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Enroll Now</a>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./course-2.png" alt="Course 2" className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
                  <h3 className="text-xl font-bold mb-2">Data Science Fundamentals</h3>
                  <p className="text-gray-700 mb-4">Learn the basics of data science and analysis techniques.</p>
                  <a href="#" className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Enroll Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-500 text-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Student Testimonials</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./jhon-doe.jpeg" alt="Student 1" className="rounded-full mx-auto mb-4" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <p className="text-lg mb-4">"EduVerse has transformed my learning experience. Highly recommended!"</p>
                  <p className="text-gray-700">- John Doe</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./jane-smith.jpeg" alt="Testimonial 2" className="rounded-full mx-auto mb-4" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <p className="text-lg mb-4">"I've never experienced such personalized learning before. EduVerse truly cares about its students."</p>
                  <p className="text-gray-700">- Jane Smith</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./webinar.jpeg" alt="webinar 1" className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
                  <h3 className="text-xl font-bold mb-2">Webinar: Introduction to Data Science</h3>
                  <p className="text-gray-700 mb-2">Date: October 15, 2024</p>
                  <p className="text-gray-700 mb-4">Join us for an insightful webinar on the fundamentals of data science.</p>
                  <a href="#" className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Register Now</a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <img src="./webinar-2.jpeg" alt="Cryptography Webinar" className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
                  <h3 className="text-xl font-bold mb-2">Webinar: Introduction to Cryptography</h3>
                  <p className="text-gray-700 mb-2">Date: April 30, 2024</p>
                  <p className="text-gray-700 mb-4">Join us for an insightful webinar on the fundamentals of cryptography and its applications in modern security systems.</p>
                  <a href="#" className="bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg text-lg font-bold inline-block transition duration-300">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-white py-12 text-center">
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
      </main>
    </div>
  );
}

export default App;
