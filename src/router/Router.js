import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageDashboard from "../page/dashboard/PageDashboard";
import PageHome from "../page/home/PageHome";
import PageStarter from "../page/starter/PageStarter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <PageHome />,
            },
            {
                path: "/dashboard",
                element: <PageDashboard />,
            },
            {
                path: "/starter",
                element: <PageStarter />,
            },
        ],
    },
]);

export default router;