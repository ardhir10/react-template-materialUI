import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageDashboard from "../page/dashboard/PageDashboard";
import PageStarter from "../page/starter/PageStarter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
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