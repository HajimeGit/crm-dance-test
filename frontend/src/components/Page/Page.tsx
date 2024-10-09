import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box } from '@mui/system';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recording from '../../services/rrweb/rrwebRecording';

const Page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
      <ToastContainer />
      <Recording />
    </Box>
  );
};

export default Page;
