'use client';

export default function About() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">About KISORA</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          KISORA was founded with a vision to create lasting positive change in underserved communities. 
          Through dedicated volunteers and strategic partnerships, we work to address critical social, 
          educational, and economic challenges.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>✓ Compassion - We care deeply for those we serve</li>
          <li>✓ Integrity - We act with honesty and transparency</li>
          <li>✓ Excellence - We strive for the highest standards</li>
          <li>✓ Collaboration - We work together for greater impact</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-700">
          Our dedicated team of professionals and volunteers are committed to making a difference every day.
        </p>
      </section>
    </div>
  );
}