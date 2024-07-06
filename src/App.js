import logo from './logo.svg';
import './App.css';
import Projeto from './pages/projeto';
import Footer from './components/footer';
import Header from './components/header'
import Main from './pages/main';
import { UserProvider } from './context/userContext';
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login';




function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
      
  );
}




function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;


