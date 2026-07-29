import {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hook/useAuth';
import Spinner from './spinner/Spinner';

const RequiredAuth = () => {
    const {auth, loading} = useAuth();
    const location = useLocation();

      if (loading){
        return (<Spinner/>)
      }

    return auth ? (
        <Outlet/>
    ) : (
        <Navigate to = '/login' state ={{from:location}} replace /> // replace replaces whatever page is running with the passed page: here it is login page
    );
};
export default RequiredAuth;