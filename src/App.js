import './App.css';
import Registration from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import useAuth from './Shared/Hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserOperation } from './Redux/auth/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './Components/RestrictedRoute/RestrictedRoute';



function App() {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUserOperation());
  }, [dispatch]);
  
  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
     
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/home" component={<Login />} />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<Registration />} />
          }
        ></Route>
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        ></Route>

        <Route path="*" element={<Navigate to={'/'} />} />
      
    
    </Routes>
  );
}

export default App;
