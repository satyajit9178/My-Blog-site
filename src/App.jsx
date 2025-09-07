import { createBrowserRouter, RouterProvider, Outlet,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Navbar from './Navbar';
import './App.css'
import Footer from "./component/Footer";
import ProtectedRoute from "./Services/ProtectedRoute";
import SingleBlog from "./pages/SingleBlog";

// Layout component → Navbar + Outlet (child pages)
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Navbar shown for all
    children: [
      { index: true, element: <Home /> },   // default route "/"
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      

      /**Protected Group */
      {
        element:<ProtectedRoute/>,
        children:[
          {path:"blogs",element:<Blogs/>},
          {path:"blogs/:id",element:<SingleBlog/>}
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
