
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
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
                    path="/login"
                    element={<LoginPage />}
                />
                <Route
                    path="/signup"
                    element={<LoginPage />}
                />
            </Routes>
            <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
