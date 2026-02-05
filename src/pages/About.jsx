import React, { useEffect, useMemo, useState } from "react";

const tabContent = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "We share honest, practical stories about building a creative business and living well on your own terms.",
    highlights: [
      "Weekly deep dives on writing, design, and entrepreneurship",
      "Actionable lessons you can put to work right away",
      "A welcoming space for makers and modern storytellers",
    ],
  },
  {
    id: "values",
    title: "Core Values",
    description:
      "Everything we publish is anchored in curiosity, kindness, and craft. We celebrate thoughtful progress over noisy perfection.",
    highlights: [
      "Readers-first storytelling",
      "Inclusive, accessible resources",
      "Transparency about our process",
    ],
  },
  {
    id: "team",
    title: "Meet the Team",
    description:
      "We are a small, global crew of writers, editors, and designers who love sharing what we learn.",
    highlights: [
      "Award-winning editors",
      "Designers with a love for clean typography",
      "Community managers who actually reply",
    ],
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabContent[0].id);

  useEffect(() => {
    document.title = "About";
  }, []);

  const activeContent = useMemo(
    () => tabContent.find((tab) => tab.id === activeTab),
    [activeTab]
  );

  return (
    <div>
      <div className="py-32 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          About Page
        </h1>
        <p className="max-w-2xl mx-auto text-base lg:text-lg text-gray-300">
          Discover the story behind our blog and the people who keep it moving.
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full border transition ${
                activeTab === tab.id
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:border-black"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {activeContent && (
          <div className="bg-white shadow-lg rounded-2xl p-8 text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {activeContent.title}
            </h2>
            <p className="text-gray-600 mb-6">{activeContent.description}</p>
            <ul className="space-y-3">
              {activeContent.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="h-2.5 w-2.5 mt-2 rounded-full bg-black" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
