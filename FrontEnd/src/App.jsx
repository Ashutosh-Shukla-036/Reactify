import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './Components/Navbar'
import { HomePage } from './Components/Home';
import { Footer } from './Components/Footer';
import About from './Components/About';
import GetInTouch from './Components/GetInTouch';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { useRecoilValue } from 'recoil';
import { userAtom } from './Atoms/userAtom';
import { Profile } from './Components/Profile';
import { Transfer } from './Components/Transfer';
import { History } from './Components/History';


function App() {

  const user = useRecoilValue(userAtom);

  return (
    <>
      <Navbar />
      <div className="container dark:bg-gray-700 mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<GetInTouch />} />
          
          {/* Conditional routes for Login and Signup */}
          <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <SignUp />} />
          
          {/* Profile page for logged-in users */}
          <Route path="/dashboard" element={user ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/transfer/:friendUsername" element={user ? <Transfer /> : <Navigate to="/login" replace />} />
          <Route path="/history" element={user ? <History /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;