import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import MainLayout from "./layouts/MainLayout";
import EventDetailsView from "./views/EventDetailsView";
import NotFound from "./views/NotFound";
import StartingSoon from "./views/StartingSoon";
import LegalPage from "./views/home/LegalPage";
import CancelPage from "./views/home/cancellation";
import Terms from "./views/home/terms";
import Sponsors from "./views/home/Sponsors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/stand-by", element: <StartingSoon /> },
      { path: "events/:id", element: <EventDetailsView/> },
      { path: "sponsors", element: <Sponsors/> },
      { path: "/l/:slug", element: <LegalPage /> },
      { path: "cancellation", element: <CancelPage /> },
      { path: "terms", element: <Terms /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
