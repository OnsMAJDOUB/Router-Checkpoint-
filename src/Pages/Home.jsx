import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen 100hv bg-gray-50">
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover the best services and products tailored just for you.
          </p>
          <a
            href="services"
            className="mt-8 inline-block bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-400"
          >
            Explore Our Services
          </a>
        </div>
      </section>
      <section className="py-12 bg-indigo-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Join us today and experience the best.</p>
        <Link
            to="/Contact"
          className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-lg hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
