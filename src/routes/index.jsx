import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const RoutesIndex = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Dashboard />}
                />
            </Routes>
        </BrowserRouter>
    );
};


export default RoutesIndex