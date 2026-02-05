import React, { useEffect, useMemo, useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  topic: "content",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = "Contact";
  }, []);

  const messageCount = formValues.message.length;
  const isFormValid = useMemo(() => {
    return (
      formValues.name.trim().length > 1 &&
      formValues.email.includes("@") &&
      formValues.message.trim().length > 10
    );
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setStatus("Please complete the form before sending.");
      return;
    }

    setStatus("Thanks! Your message is on its way.");
    setFormValues(initialFormState);
  };

  return (
    <div>
      <div className="py-32 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Page
        </h1>
        <p className="max-w-2xl mx-auto text-base lg:text-lg text-gray-300">
          Have a question or a story idea? Send us a note and we will reply.
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <label className="text-sm font-semibold text-gray-700">
              Your name
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="text-sm font-semibold text-gray-700">
              Email address
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
          </div>

          <label className="text-sm font-semibold text-gray-700">
            Topic
            <select
              name="topic"
              value={formValues.topic}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="content">Content collaboration</option>
              <option value="press">Press inquiry</option>
              <option value="community">Community question</option>
            </select>
          </label>

          <label className="text-sm font-semibold text-gray-700">
            Message
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={5}
              placeholder="Share a few details so we can help."
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Minimum 10 characters</span>
              <span>{messageCount}/500</span>
            </div>
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className={`px-6 py-3 rounded-full font-semibold transition ${
                isFormValid
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Send message
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
