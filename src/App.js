import './App.css';
import AdminLayout from './layouts/admin-layout/AdminLayout';
// import Login from './components/auth/Login';
import {Routes, Route} from 'react-router-dom'
// import PrivateRoute from './utils/PrivateRoute'
function App() {
  
  return (
    <AdminLayout/>
    // <Routes>
    // <Route path="/login" exact element={<Login/>} />
    // <Route path="/"  element={<AdminLayout />} />

    // {/* <PrivateRoute  path="/" element={<AdminLayout />} />  */}
    // </Routes>
  );
}


export default App;
