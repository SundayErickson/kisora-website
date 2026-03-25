import React from 'react';
import './App.css';

const KISORA = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to KISORA</h1>
        <p className="mt-4 text-xl">Empowering Communities Through Innovative Solutions</p>
      </section>

      {/* About Section */}
      <section className="about py-20">
        <h2 className="text-3xl font-semibold text-center">About Us</h2>
        <p className="mt-4 text-center px-4">KISORA is dedicated to making a significant impact in the community through various programs designed to uplift and empower individuals.</p>
      </section>

      {/* Programs Section */}
      <section className="programs py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Our Programs</h2>
        <ul className="mt-4">
          <li className="py-2 text-center">1. Educational Workshops</li>
          <li className="py-2 text-center">2. Community Support Initiatives</li>
          <li className="py-2 text-center">3. Environmental Projects</li>
        </ul>
      </section>

      {/* Impact Section */}
      <section className="impact py-20">
        <h2 className="text-3xl font-semibold text-center">Our Impact</h2>
        <p className="mt-4 text-center px-4">We have successfully impacted thousands of lives through our commitment to community service and support.</p>
      </section>

      {/* Contact Section */}
      <section className="contact py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <p className="mt-4 text-center px-4">For inquiries, please email us at <a href="mailto:info@kisora.org" className="text-blue-500 underline">info@kisora.org</a></p>
      </section>
    </div>
  );
};

export default KISORA;