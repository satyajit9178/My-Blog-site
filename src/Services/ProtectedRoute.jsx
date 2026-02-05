import { Outlet, Link } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem("loggedIn");

  if (auth) return <Outlet />;

  return (
    <div className="bg-white text-gray-900">
      <div className="py-28 bg-black text-center text-white px-4">
        <p className="uppercase tracking-[0.2em] text-sm text-orange-300 mb-4">Restricted</p>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Login required</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          First you need to log in to access the Blogs page.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-center space-y-4">
        <p className="text-gray-600">
          Please use the <span className="font-semibold">Log in</span> button in the top right.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProtectedRoute;
