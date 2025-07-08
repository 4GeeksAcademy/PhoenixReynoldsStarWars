// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import Person from "./pages/Person";
import Planet from "./pages/Planet";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={
      <div className="justify-content-center align-items-center vh-100 bg-black">
        <div className="text-center"> <img src="https://static.wikia.nocookie.net/theclonewiki/images/e/ee/Pilf_Mukmuk_Switch-1-.png/revision/latest?cb=20111028185118" alt="..." style={{height: "30%", width: "40%"}}></img> </div>
        <h1 className="text-center text-danger mt-3">This is not the page you're looking for...</h1>
      </div>
    } >

      {/* Add routes for details.jsx and other shit here: Route path=/single/1 */}

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />  {/* Dynamic route for single items */}
      <Route path="/demo" element={<Demo />} />
      <Route path="/person/:uid" element={< Person />} /> {/* added to use for useParams; grabs uid from the url */}
      <Route path="/planet/:uid" element={< Planet />} />

    </Route>
  )
);