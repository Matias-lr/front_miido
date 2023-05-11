import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import FormPage from './pages/FormPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import ComboPlusGooglemap from './pages/ComboPlusGooglemap';
import DashboardAppPage from './pages/AppWebsiteVisits';
import ProgamDeFertilizer from './pages/ProgamDeFertilizerCalculated';
import ProgamDeFertilizer2 from './pages/ProgamDeFertilizer2';
import ProgamDeFertilizer3 from './pages/ProgamDeFertilizer3';
import CuartelPage from './pages/CuartelPage';
import Modal1 from './pages/Modal1';
import Modal2 from './pages/Modal2';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'ComboPlusGooglemap', element: <ComboPlusGooglemap /> },
        { path: 'FormPage', element: <FormPage /> },
        { path: 'ProgamDeFertilizer', element: <ProgamDeFertilizer /> },
        { path: 'Modal1', element: <Modal1 /> },
        { path: 'Modal2', element: <Modal2 /> },
        { path: 'cuartel/:idCuartel', element: <CuartelPage/>},
        { path: 'ProgamDeFertilizer/:idCuartel/:idProductoN/:idProductoK/:idProductoP', element: <ProgamDeFertilizer /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '*', element: <Navigate to="/login" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    },
    
  ]);

  return routes;
}
