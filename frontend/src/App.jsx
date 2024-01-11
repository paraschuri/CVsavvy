
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import User from './pages/User'
import Recruiter from './pages/Recruiter'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/user"
                    element={<User />}
                />
                <Route
                    path="/companies"
                    element={<Recruiter />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route
                    path="/signup"
                    element={<LoginPage />}
                />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
