import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Pages/Auth/AuthContext';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
import Signup from './Pages/Auth/Signup';
import SuccessPage from './Pages/Auth/SuccessPage';
import { useState, useEffect, useContext } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/SuccessPage" element={<SuccessPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute component={Home} />} />
          <Route path="/SuccessPage" element={<PrivateRoute component={SuccessPage} />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute = ({ component: Component }) => {
  const { user } = useContext(AuthContext);
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
