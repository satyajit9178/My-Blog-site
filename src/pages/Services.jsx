import React, { useEffect, useMemo, useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Editorial Strategy",
    category: "Content",
    summary: "Plan your publishing calendar with confidence.",
    details:
      "We build a 90-day content roadmap with story arcs, distribution plans, and weekly publishing prompts.",
  },
  {
    id: 2,
    title: "Newsletter Makeover",
    category: "Content",
    summary: "Turn readers into loyal fans.",
    details:
      "We refresh your newsletter layout, subject lines, and reader journey with proven engagement templates.",
  },
  {
    id: 3,
    title: "Brand Story Workshop",
    category: "Brand",
    summary: "Clarify your tone, promise, and point of view.",
    details:
      "A collaborative session that defines your brand pillars, differentiators, and storytelling voice.",
  },
  {
    id: 4,
    title: "Community Launch",
    category: "Community",
    summary: "Create spaces your audience wants to return to.",
    details:
      "We map out your member onboarding flow, engagement rituals, and moderation playbook.",
  },
  {
    id: 5,
    title: "Visual Refresh",
    category: "Brand",
    summary: "Upgrade your visuals without a full redesign.",
    details:
      "Design guidance for typography, color updates, and layout tweaks that keep your brand consistent.",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    document.title = "Services";
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(servicesData.map((service) => service.category))];
  }, []);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      return servicesData;
    }
    return servicesData.filter(
      (service) => service.category === activeCategory
    );
  }, [activeCategory]);

  const toggleService = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="py-32 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Service Page
        </h1>
        <p className="max-w-2xl mx-auto text-base lg:text-lg text-gray-300">
          Explore how we help creators turn ideas into meaningful experiences.
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {service.category}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="text-sm font-semibold text-black"
                >
                  {expandedId === service.id ? "Hide" : "Details"}
                </button>
              </div>
              <p className="text-gray-600 mt-4">{service.summary}</p>
              {expandedId === service.id && (
                <p className="text-gray-700 mt-4 border-t border-gray-200 pt-4">
                  {service.details}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
