import React, { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "Editorial Strategy",
    category: "Content",
    description: "Build a publishing roadmap that keeps your blog consistent and focused.",
    monthly: 180,
    yearly: 1680,
    highlights: ["Topic roadmap", "SEO briefs", "Publishing cadence"],
  },
  {
    id: 2,
    title: "Content Refresh",
    category: "Content",
    description: "Audit top posts and update them for accuracy, search, and clarity.",
    monthly: 140,
    yearly: 1320,
    highlights: ["Post updates", "Keyword tuning", "Internal linking"],
  },
  {
    id: 3,
    title: "Brand Design Kit",
    category: "Design",
    description: "Upgrade your blog visuals with cohesive templates and cover art.",
    monthly: 220,
    yearly: 2040,
    highlights: ["Post templates", "Cover graphics", "Color system"],
  },
  {
    id: 4,
    title: "Landing Page Build",
    category: "Design",
    description: "Create focused landing pages that convert readers to subscribers.",
    monthly: 240,
    yearly: 2280,
    highlights: ["Conversion layout", "CTA testing", "Responsive design"],
  },
  {
    id: 5,
    title: "Audience Growth",
    category: "Growth",
    description: "Grow your reach with campaign planning and distribution playbooks.",
    monthly: 260,
    yearly: 2460,
    highlights: ["Channel mix", "Campaign briefs", "Analytics review"],
  },
  {
    id: 6,
    title: "Newsletter Engine",
    category: "Growth",
    description: "Turn blog readers into loyal subscribers with a structured cadence.",
    monthly: 190,
    yearly: 1740,
    highlights: ["Signup flow", "Welcome series", "Performance tracking"],
  },
];

const categories = ["All", "Content", "Design", "Growth"];

const Services = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [billing, setBilling] = useState("monthly");

  useEffect(() => {
    document.title = "Services";
  }, []);

  const filtered = services.filter((service) => {
    const matchesCategory = category === "All" || service.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const handleClear = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="py-28 bg-black text-center text-white px-4">
        <p className="uppercase tracking-[0.2em] text-sm text-orange-300 mb-4">Services</p>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Build a stronger blog</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Mix and match services, then request details. Filter, search, and compare pricing instantly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => {
              const active = category === item;
              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  aria-pressed={active}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    active
                      ? "bg-orange-500 text-white"
                      : "border border-gray-200 text-gray-600 hover:border-orange-400"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <button
              className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:border-orange-400"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services"
              className="w-full sm:w-64 rounded-full border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <div className="inline-flex rounded-full border border-gray-200 p-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                aria-pressed={billing === "monthly"}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  billing === "monthly" ? "bg-black text-white" : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                aria-pressed={billing === "yearly"}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  billing === "yearly" ? "bg-black text-white" : "text-gray-600"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Showing {filtered.length} of {services.length} services
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
            No services match your filters.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => {
              const price = billing === "monthly" ? service.monthly : service.yearly;
              const suffix = billing === "monthly" ? "/mo" : "/yr";
              return (
                <div key={service.id} className="rounded-2xl border border-gray-200 p-6 flex flex-col">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gray-400">
                    <span>{service.category}</span>
                    <span className="text-orange-600 font-semibold normal-case text-sm">
                      ${price} {suffix}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-3">{service.title}</h3>
                  <p className="text-gray-600 mt-2 flex-1">{service.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 rounded-full border border-orange-500 text-orange-600 px-4 py-2 font-semibold hover:bg-orange-500 hover:text-white">
                    Request details
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
