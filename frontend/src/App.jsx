
import Navbar from './components/Navbar'
import Home from './pages/home'
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
      </BrowserRouter>
    </>
  )
}

export default App
