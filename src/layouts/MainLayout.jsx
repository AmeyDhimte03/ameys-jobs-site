import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer /> {/* postion is absolute in the corner so doesn't matter where we put it*/}
    </>
  );
};
export default MainLayout;
