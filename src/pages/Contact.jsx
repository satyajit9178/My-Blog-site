import React, { useEffect, useMemo, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  topic: "General",
  budget: "Under $500",
  message: "",
};

const validateForm = (values) => {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please write at least 20 characters.";
  }
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [copyNotice, setCopyNotice] = useState("");

  useEffect(() => {
    document.title = "Contact";
  }, []);

  useEffect(() => {
    if (status !== "success") return;
    const timeout = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (!copyNotice) return;
    const timeout = setTimeout(() => setCopyNotice(""), 2500);
    return () => clearTimeout(timeout);
  }, [copyNotice]);

  const errors = useMemo(() => validateForm(form), [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const markTouched = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, topic: true, budget: true, message: true });
    if (Object.keys(errors).length > 0) return;
    setStatus("success");
    setForm(initialForm);
    setTouched({});
  };

  const handleCopyEmail = async () => {
    if (!navigator?.clipboard) {
      setCopyNotice("Copy not supported");
      return;
    }
    try {
      await navigator.clipboard.writeText("hello@blogcraft.com");
      setCopyNotice("Email copied");
    } catch (err) {
      setCopyNotice("Copy failed");
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 focus:ring-orange-200"
    }`;

  return (
    <div className="bg-white text-gray-900">
      <div className="py-28 bg-black text-center text-white px-4">
        <p className="uppercase tracking-[0.2em] text-sm text-orange-300 mb-4">Contact</p>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Let's talk</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Tell us about your blog goals and we will reply within two business days.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {status === "success" && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
              Thanks for reaching out. We got your message and will reply soon.
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={() => markTouched("name")}
                className={inputClass("name")}
                aria-invalid={touched.name && !!errors.name}
              />
              {touched.name && errors.name && (
                <p className="text-sm text-red-500 mt-2">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() => markTouched("email")}
                className={inputClass("email")}
                aria-invalid={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <p className="text-sm text-red-500 mt-2">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Topic</label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                onBlur={() => markTouched("topic")}
                className={inputClass("topic")}
              >
                <option>General</option>
                <option>New blog setup</option>
                <option>Content strategy</option>
                <option>Design refresh</option>
                <option>Growth plan</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold">Budget</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                onBlur={() => markTouched("budget")}
                className={inputClass("budget")}
              >
                <option>Under $500</option>
                <option>$500 to $1500</option>
                <option>$1500 to $3000</option>
                <option>$3000 plus</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={() => markTouched("message")}
              rows={5}
              className={inputClass("message")}
              aria-invalid={touched.message && !!errors.message}
            />
            {touched.message && errors.message && (
              <p className="text-sm text-red-500 mt-2">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-orange-500 text-white py-3 font-semibold hover:bg-orange-600"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-xl font-bold">Contact details</h3>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-700">hello@blogcraft.com</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Copy
                </button>
              </div>
              {copyNotice && (
                <p className="text-xs text-orange-600 mt-2">{copyNotice}</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-gray-700">(555) 218-3041</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Office hours</p>
              <p className="text-gray-700">Monday to Friday, 9am to 5pm</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 space-y-3">
            <h3 className="text-xl font-bold">What happens next</h3>
            <p className="text-gray-600">We review your message and match you with a specialist.</p>
            <p className="text-gray-600">You get a clear plan and timeline before we start.</p>
            <p className="text-gray-600">We share progress updates every week.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
