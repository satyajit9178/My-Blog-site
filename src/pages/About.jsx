import React, { useEffect, useState } from "react";

const stats = [
  { label: "Posts published", value: 1280 },
  { label: "Monthly readers", value: 34000 },
  { label: "Contributors", value: 26 },
  { label: "Years running", value: 7 },
];

const values = [
  { title: "Clarity first", body: "We turn complex ideas into clear, helpful stories." },
  { title: "Curiosity always", body: "We follow questions, not hype, and share what we learn." },
  { title: "Community powered", body: "We learn with our readers and lift new voices." },
  { title: "Craft matters", body: "Strong editing, great design, and respectful sources." },
];

const team = [
  { name: "Ava Patel", role: "Editor in Chief" },
  { name: "Noah Brooks", role: "Design Lead" },
  { name: "Mia Carter", role: "Growth Strategist" },
  { name: "Liam Ortiz", role: "Writer, Tech" },
  { name: "Sophia Nguyen", role: "Writer, Culture" },
  { name: "Ethan Price", role: "Community Manager" },
];

const About = () => {
  const [storyOpen, setStoryOpen] = useState(false);
  const [openValue, setOpenValue] = useState(0);
  const [showAllTeam, setShowAllTeam] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    document.title = "About";
  }, []);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 900;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = stats.map((stat) => Math.floor(stat.value * progress));
      setCounts(next);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const visibleTeam = showAllTeam ? team : team.slice(0, 3);

  return (
    <div className="bg-white text-gray-900">
      <div className="py-28 bg-black text-center text-white px-4">
        <p className="uppercase tracking-[0.2em] text-sm text-orange-300 mb-4">Our Blog</p>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We help curious readers discover ideas worth keeping. Here is how the team, the craft,
          and the community come together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600" href="#story">
            Read Our Story
          </a>
          <a className="px-6 py-3 rounded-full border border-white/30 text-white hover:border-white" href="#values">
            Our Values
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <section id="story" className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">A small team with a big reader mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We started as a weekly newsletter and grew into a full blog community. Today we publish
              deep dives, practical guides, and honest reviews.
            </p>
            {storyOpen && (
              <p className="text-gray-700 leading-relaxed mt-4">
                Our editorial process blends research with real experience. We test ideas, interview creators,
                and keep updates flowing so posts stay useful long after launch.
              </p>
            )}
            <button
              className="mt-6 text-orange-600 font-semibold hover:text-orange-700"
              onClick={() => setStoryOpen((open) => !open)}
              aria-expanded={storyOpen}
            >
              {storyOpen ? "Show less" : "Read more"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="rounded-2xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-gray-900">
                  {counts[index].toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="values" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Values we write by</h2>
            <span className="text-sm text-gray-500">Click a value to expand</span>
          </div>
          <div className="space-y-3">
            {values.map((value, index) => {
              const isOpen = openValue === index;
              return (
                <div key={value.title} className="rounded-2xl border border-gray-200">
                  <button
                    className="w-full flex items-center justify-between text-left px-5 py-4"
                    onClick={() => setOpenValue(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold">{value.title}</span>
                    <span className="text-gray-400">{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600">{value.body}</div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Meet the team</h2>
            <button
              className="text-orange-600 font-semibold hover:text-orange-700"
              onClick={() => setShowAllTeam((prev) => !prev)}
            >
              {showAllTeam ? "Show fewer" : "Show all"}
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {visibleTeam.map((member) => (
              <div key={member.name} className="rounded-2xl border border-gray-200 p-5">
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="text-sm text-gray-500 mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
