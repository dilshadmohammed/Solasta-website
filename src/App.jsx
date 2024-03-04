import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./views/home/Home";
import LoginView from "./views/home/components/Ambassadors/login";
import SignupView from "./views/home/components/Ambassadors/signup";
import MainLayout from "./layouts/MainLayout";
import EventDetailsView from "./views/EventDetailsView";
import NotFound from "./views/NotFound";
import programType from "./programType";
import AmbassadorDashboard from "./views/AmbassadorDashboard";
import Tickets from "./views/Tickets";
import StartingSoon from "./views/StartingSoon";
import LegalPage from "./views/home/LegalPage";
import CancelPage from "./views/home/cancellation";
import Terms from "./views/home/terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/stand-by", element: <StartingSoon /> },
      { path: "events/:id", element: <EventDetailsView type={programType.EVENT} /> },
      {
        path: "workshops/:id",
        element: <EventDetailsView type={programType.WORKSHOP} />,
      },
      { path: "games/:id", element: <EventDetailsView type={programType.GAME} /> },
      {
        path: "competitions/:id",
        element: <EventDetailsView type={programType.COMPETITION} />,
      },
      { path: "login", element: <LoginView /> },
      { path: "signup", element: <SignupView /> },
      { path: "tickets", element: <Tickets /> },
      { path: "dashboard", element: <AmbassadorDashboard /> },
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
